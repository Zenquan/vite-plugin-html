import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'fs'
import {resolve} from 'path'
import template from 'art-template'

type HtmlVitePluginOptions = {

}

export default function HtmlVitePlugin (
    options: Partial<HtmlVitePluginOptions> = {}
  ): Plugin[] {

  // 注入html模板数据
  const html: string = template(`${__dirname}/build/index.html`, {
    htmlWebpackPlugin: {
      options
    }
  })

  // 写入html
  const writeDataFile = (path: string, data: string) => {
    fs.writeFileSync(resolve(path), data);
  }

  const isFileExits = (file: string) => fs.existsSync(file);

  const indexHTMLPath = `${__dirname}/index.html`
  !isFileExits(indexHTMLPath) && writeDataFile(indexHTMLPath , html)

  return []
}