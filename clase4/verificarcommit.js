const {exec} = require('child_process')

let urlApiGit = "curl https://api.github.com/repos/arteysoft/prueba/commits"

exec(urlApiGit, {cwd:'/cursos/soporte'}, (err, stdout, stderr) => {
    let arrCommits = JSON.parse(stdout)
    for (let objMetadata of arrCommits) {
        console.log(objMetadata.sha)
    }
})