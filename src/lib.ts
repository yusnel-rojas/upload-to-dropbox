import { Dropbox } from 'dropbox'
import fetch from 'node-fetch'

export async function upload(
  path: string,
  contents: Buffer,
  accessToken: string
): Promise<void> {
  const dropbox = new Dropbox({ accessToken, fetch })
  await dropbox.filesUpload({ path, contents })
}

export async function filesDelete(
  path: string,
  accessToken: string
): Promise<void> {
  const dropbox = new Dropbox({ accessToken, fetch })
  await dropbox.filesDelete({ path })
}
