function promisify(fn) {
    return new Promise((resolve, reject)=>{
        fn((err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

module.exports = promisify
