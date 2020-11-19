import * as core from '@actions/core'
import * as fs from 'fs'
import { upload, fileDelete } from './upload'

const accessToken = core.getInput('dropbox_access_token')
const file = core.getInput('file')
const path = core.getInput('path')
const overwrite = core.getInput('overwrite') == 'yes'

async function run() {
  try {
    const contents = await fs.promises.readFile(file)
    
    if (overwrite){
      await fileDelete(path);
    }catch (error) {
      core.info(`Error deleting the file '${path}'`)
    }
    
    core.debug(`Uploading '${file}' -> '${path}'`)
    await upload(path, contents, accessToken)
    core.info(`'${file}' -> '${path}' has been successfully uploaded`)
  } catch (error) {
    core.setFailed(error)
  }
}

run()
