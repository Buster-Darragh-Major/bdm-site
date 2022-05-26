function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
}

function GetImage() {
    const images = importAll(require.context('./res', false, /\.(png|jpe?g|svg)$/));
    const randomImage = Object.keys(images)[Math.floor(Math.random()*Object.keys(images).length)]
    return images[randomImage];
}

export default GetImage;