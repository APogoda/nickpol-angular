import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
  }

  // Modify this method according to your custom logic
  private stylize(text: string): string {
    let stylizedText = '';
    if (text && text.length > 0) {
      for (const t of text.split(' ')) {
        if (t.startsWith('@') && t.length > 1) {
          stylizedText += `<a href="#${t.substring(1)}">${t}</a> `;
        } else {
          stylizedText += t + ' ';
        }
      }
      return stylizedText;
    } else {
      return text;
    }
  }
}
