import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'fs'
import {resolve} from 'path'
import template from 'art-template'

type HtmlVitePluginOptions = {
  indexPath: string,
  htmlWebpackPlugin: {
    options: {
      title: string,
      pwa: boolean,
      vite: boolean
    }
  }
}

export default function HtmlVitePlugin (
    options: Partial<HtmlVitePluginOptions> = {}
  ): Plugin[] {

  // 注入html模板数据
  const html: string = template(
    resolve(__dirname, options.indexPath)
  , options)

  // 写入html
  const writeDataFile = (path: string, data: string) => {
    fs.writeFileSync(resolve(path), data);
  }

  const isFileExits = (file: string) => fs.existsSync(file);

  const indexHTMLPath = resolve(__dirname, '../index.html')
  !isFileExits(indexHTMLPath) && writeDataFile(indexHTMLPath , html)

  return []
}