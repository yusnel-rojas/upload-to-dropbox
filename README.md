# Upload to Dropbox

[![](https://github.com/deka0106/upload-to-dropbox-action/workflows/build-test/badge.svg)](https://github.com/deka0106/upload-to-dropbox-action/actions)

This uploads a file to Dropbox

## Usage

See [action.yml](action.yml)

### Setup

Generate access token that has `files.content.write` permission on [App Console](https://www.dropbox.com/developers/apps).

Save the token as `DROPBOX_ACCESS_TOKEN` on your repository Secrets.

### Upload a file

```yaml
- uses: yusnel-rojas/upload-to-dropbox@v1
  with:
    dropbox_access_token: ${{ secrets.DROPBOX_ACCESS_TOKEN }}
    file: dist/paper.pdf
    overwrite: yes
    path: /thesis/my-thesis.pdf
```
