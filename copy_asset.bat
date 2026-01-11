@echo off
copy /Y "C:\Users\shahe\.gemini\antigravity\brain\c83611af-a5ce-4857-840e-0f4180ae9e32\uploaded_image_1768112711810.jpg" "c:\projects\NittoJatra-web\src\assets\hero-bg.jpg"
if %errorlevel% equ 0 (
    echo Success > "c:\projects\NittoJatra-web\copy_done.txt"
) else (
    echo Failure %errorlevel% > "c:\projects\NittoJatra-web\copy_fail.txt"
)
