import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pl-text',
  templateUrl: './pl-text.component.html',
  styleUrls: ['./pl-text.component.scss']
})
export class PlTextComponent implements OnInit {
  @Input() rawText: string = "";
  parsedText: string = "";

  constructor() {}

  ngOnInit(): void {
    this.parsedText = this.rawText;
    this.parseMarkdownToHtml();
  }

  parseMarkdownToHtml() {
    var regexps: { [key: string]: RegExp } = {
      // TITLES
      "<h1>$1</h1>": /#\s*(.*)\s*\n/,
      "<h2>$1</h2>": /##\s*(.*)\s*\n/,
      "<h3>$1</h3>": /###\s*(.*)\s*\n/,
      "<h4>$1</h4>": /####\s*(.*)\s*\n/,
      "<h5>$1</h5>": /#####\s*(.*)\s*\n/,
      "<h6>$1</h6>": /######\s*(.*)\s*\n/,

      // TEXT
      "<i>$1</i>": /\*(.*)\*/,
      "<b>$1</b>": /\*\*(.*)\*\*/,
      "<b><i>$1</i></b>": /\*\*\*(.*)\*\*\*/,

      "<code>$1</code>": /`(.*)`/,
      "<pre>$1</pre>": /```\n(.*)\s*\n```/,
    }

    Object.keys(regexps).forEach(regex => {
      this.parsedText = this.parsedText.replace(regexps[regex], regex);
    });
  }
}
