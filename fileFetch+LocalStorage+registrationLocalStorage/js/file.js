let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
input.addEventListener('change', () => {
    let files = input.files;
    let size = files.size;
    alert("The selected file contains" + files[0].size + "bytes");
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n')
    };
    reader.oneerror = (e) => alert(e.target.error.name)
    reader.readAsText(file);
 
})