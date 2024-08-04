const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 5 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}
const delay = () => {
    setTimeout(() => {
        document.title="Hacked.File";
        document.body.innerHTML = "";
        document.body.classList.add("image");
        document.body.innerHTML = "Your device is hacked .............<br>"
        document.body.append("Your device control transferred to some unknown source!")


    }, 2000);
}

const showLoadingBar = () => {
    console.log("Showing loading bar...");
    document.querySelector('#loadingBarContainer').style.display = 'block';
    var loadingBar = document.getElementById('loadingBar');
    var width = 0;
    var interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 300);
}

const hideLoadingBar = () => {
    console.log("Hiding loading bar...");
    document.getElementById('loadingBarContainer').style.display = 'none';
}


async function main() {
    showLoadingBar();
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {

            last.innerHTML = last.innerHTML + "."
        }

    }, 200);


    let text = ["Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"];

    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t);
    hideLoadingBar();
    delay();

}
setTimeout(() => {
    document.body.querySelector('section').innerHTML = "";

}, 7000);
setTimeout(() => {
    document.body.classList.add("hacking-mode");
    main();
}, 8000);