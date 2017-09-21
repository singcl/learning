/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-15 21:28:08
 * @version $Id$
 */

{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Mall",
            "program": "${workspaceRoot}/mall/yog/app.js",
            "cwd": "${workspaceRoot}/mall/yog/"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Member",
            "program": "${workspaceRoot}/member/yog/app.js",
            "cwd": "${workspaceRoot}/member/yog/"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Merchant",
            "program": "${workspaceRoot}/merchant/yog/app.js",
            "cwd": "${workspaceRoot}/merchant/yog/"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Platform",
            "program": "${workspaceRoot}/platform/yog/app.js",
            "cwd": "${workspaceRoot}/platform/yog/"
        },
        // {
        //     "type": "node",
        //     "request": "launch",
        //     "name": "Admin",
        //     "program": "${workspaceRoot}/admin/build/dev-server.js",
        //     "cwd": "${workspaceRoot}/admin/"
        // },
        //附加到进程
        {
            "type": "node",
            "request": "attach",
            "name": "附加到进程",
            "address": "localhost",
            "port": 5858
        }
    ],
    "compounds": [
        {
            "name": "Mall/Member/Merchant/Platform",
            "configurations": [
                "Mall",
                "Member",
                "Merchant",
                "Platform"
            ]
        }
    ]
}