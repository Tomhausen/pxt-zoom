
let y1 = 0
let x1 = 0
let memsize1 = 0
let size1 = 1
let zLayer1 = 1
let sw = screen.width
let sh = screen.height
let variable = scene.createRenderable(zLayer1, (image: Image, camera: scene.Camera) => {
    let screenclone = image.clone()
    //helpers.imageBlit(image, (x1 - Math.trunc(x1)) * - size1, (y1 - Math.trunc(y1)) * - size1, sw + Math.ceil(size1), sh + Math.ceil(size1), screenclone, x1, y1, (sw - Math.ceil(size1)) / size1, (sh - Math.ceil(size1)) / size1, true, false)
    image.fillRect(0, 0, sw, sh, 0)
    helpers.imageBlit(image, x1, y1, sw * size1, sh * size1, screenclone, 0, 0, sw, sh, true, false)
})
enum Mode {
    //% block="Center"
    Center,
    //% block="Top-Left"
    TopLeft,
    //% block="Top"
    Top,
    //% block="Top-Right"
    TopRight,
    //% block="Left"
    Left,
    //% block="Right"
    Right,
    //% block="Bottom-Left"
    BottomLeft,
    //% block="Bottom"
    Bottom,
    //% block="Bottom-Right"
    BottomRight
}
//% color="#3fcbf4" icon="\uf002"
//% groups='["Normal", "Experimental"]'
namespace Zoom {
    //% block="set screen zoom to $size times with anchor $anchor || over $ms ms"
    //% weight=2
    //% picker.fieldEditor="gridpicker"
    //% picker.fieldOptions.width=220
    //% picker.fieldOptions.columns=1
    //% picker=Mode
    //% ms.shadow="timePicker"
    //% expandableArgumentMode="toggle"
    //% group=Normal
    export function SetZoomFilter(size: number, anchor: Mode, ms = 25) {
        if (ms < 25) {
            ms = 25
        }
        memsize1 = size - size1
        for (let i = 0; i < (ms / 25); i++) {
            size1 += memsize1 / (ms / 25)
            if (anchor == 0 || anchor == 2 || anchor == 7) {
                x1 = (sw / 2) - (sw / 2) * size1
            } else if (anchor == 3 || anchor == 5 || anchor == 8) {
                x1 = sw - (sw * size1)
            }
            if (anchor == 0 || anchor == 4 || anchor == 5) {
                y1 = (sh / 2) - (sh / 2) * size1
            } else if (anchor == 6 || anchor == 7 || anchor == 8) {
                y1 = sh - (sh * size1)
            }
            pause(25)
        }
    }
    //% block="set screen zoom to $size with offset x: $x y: $y||over (ms) $ms"
    //% weight=1
    //% ms.shadow="timePicker"
    //% expandableArgumentMode="toggle"
    //% group=Normal
    export function SetZoomFilterOffset(size: number, x: number, y: number, ms = 25) {
        if (ms < 25) {
            ms = 25
        }
        memsize1 = size - size1
        for (let j = 0; j < (ms / 25); j++) {
            size1 += memsize1 / (ms / 25)
            x1 = -x + (sw / 2) - size1 * (sw / 2)
            y1 = -y + (sh / 2) - size1 * (sh / 2)
            pause(25)
        }
    }
}