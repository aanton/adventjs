/**
 * @param {string[]} files
 * @returns {string[]}
 */
export default function fixFiles(files) {
  const fixedFiles = []
  const filesCounter = {}

  files.forEach(file => {
    const fixedFile = fixedFiles.includes(file)
      ? `${file}(${filesCounter[file]})`
      : file

    fixedFiles.push(fixedFile)
    filesCounter[file] = (filesCounter[file] || 0) + 1
  })

  return fixedFiles
}
