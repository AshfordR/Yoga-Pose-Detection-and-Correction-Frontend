import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST(request: NextRequest) {
    const { confidence } = await request.json();

    return new Promise((resolve, reject) => {
        exec(`python inference.py --model model.h5 --conf ${confidence} --source 0`, (error, stdout, stderr) => {
            if (error) {
                resolve(new NextResponse(JSON.stringify({ error: stderr }), { status: 500 }));
                return;
            }
            resolve(new NextResponse(JSON.stringify({ message: 'Inference started' }), { status: 200 }));
        });
    });
}
