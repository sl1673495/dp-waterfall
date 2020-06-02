let loadImgHeights = (imgs) => {
  return new Promise((resolve, reject) => {
    const length = imgs.length
    const heights = []
    let count = 0
    const load = (index) => {
      let img = new Image()
      const checkIfFinished = () => {
        count++
        if (count === length) {
          resolve(heights)
        }
      }
      img.onload = () => {
        const ratio = img.height / img.width
        const halfHeight = ratio * halfInnerWidth
        // 高度按屏幕一半的比例来计算
        heights[index] = halfHeight
        checkIfFinished()
      }
      img.onerror = () => {
        heights[index] = 0
        checkIfFinished()
      }
      img.src = imgs[index]
    }
    imgs.forEach((img, index) => load(index))
  })
}

let sum = (nums) => nums.reduce((a, b) => a + b)

let omitByIndexes = (arr, omitIndexes) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!omitIndexes.includes(i)) {
      res.push(i)
    }
  }
  return res
}

let findNearest = (arr, num) => {
  let prevIndex = 0
  for (let index in arr) {
    if (index >= num && prevIndex < num) {
      return index
    }
    prevIndex = index
  }
  return num
}
