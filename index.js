import sharp from "sharp"
import path from "path"

const red = '#d30000'
const green = '#25b100'
const blue = '#01627a'
const colors = [red, green, blue]
const colorNames = [ "red", "green", "blue"]

const filePath = process.argv[2]
const fileName = path.parse(filePath).name

const whiteSVG = await sharp(filePath)
    .resize(180, 180)
    .modulate({
        lightness: 100
    }).toBuffer()

for (let i = 0; i < colors.length; i++) {
    const color = colors[i];

    await sharp(whiteSVG)
        .extend({ top: 20, left: 20, right: 20, bottom: 20, background: color })
        .flatten({ background: color })
        .png({quality: 20})
        .toFile(`./remixicon-output/${fileName}_${colorNames[i]}.png`)
}