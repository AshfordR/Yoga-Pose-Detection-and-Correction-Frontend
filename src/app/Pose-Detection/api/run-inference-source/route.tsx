import { NextRequest, NextResponse } from 'next/server';
import formidable, { File } from 'formidable';
import path from 'path';
import { exec } from 'child_process';
import { IncomingMessage } from 'node:http';

type Fields = { [fieldName: string]: string | string[] | undefined };
type Files = formidable.Files<string>;

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request: NextRequest & { req: IncomingMessage }) {
    const form = new formidable.IncomingForm({
        uploadDir: path.join(process.cwd(), 'temp'),
        keepExtensions: true,
    });

    return new Promise<NextResponse>((resolve) => {
        form.parse(request.req, async (err, fields: Fields, files: Files) => {
            if (err) {
                resolve(new NextResponse(JSON.stringify({ error: err.message }), { status: 500 }));
                return;
            }

            const { confidence, source_type } = fields;

            if (source_type === 'image' && files.image_file && files.image_file.length > 0) {
                const imagePath = files.image_file[0].filepath; // Access the path of the first file in the array
                exec(`python inference.py --model model.h5 --conf ${confidence} --source ${imagePath}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error('Python script execution error:', stderr); // Log Python script errors
                        resolve(new NextResponse(JSON.stringify({ error: stderr }), { status: 500 }));
                        return;
                    }
                    console.log('Python script output:', stdout); // Log Python script output
                    resolve(new NextResponse(JSON.stringify({ message: 'Inference started with image' }), { status: 200 }));
                });
            } else if (source_type === 'camera') {
                exec(`python inference.py --model model.h5 --conf ${confidence} --source 0`, (error, stdout, stderr) => {
                    if (error) {
                        console.error('Python script execution error:', stderr); // Log Python script errors
                        resolve(new NextResponse(JSON.stringify({ error: stderr }), { status: 500 }));
                        return;
                    }
                    console.log('Python script output:', stdout); // Log Python script output
                    resolve(new NextResponse(JSON.stringify({ message: 'Inference started with camera' }), { status: 200 }));
                });
            } else {
                resolve(new NextResponse(JSON.stringify({ error: 'Invalid source type or missing file' }), { status: 400 }));
            }
        });
    });
}
