function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
}

function GetImage(index) {
    const images = importAll(require.context('./res', false, /\.(png|jpe?g|svg)$/));
    index = index =! null ? index : Math.floor(Math.random()*Object.keys(images).length);
    const randomImage = Object.keys(images)[index];
    return images[randomImage];
}

export default GetImage;