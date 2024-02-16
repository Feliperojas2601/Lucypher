import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  @Input({ required: true }) gistUrl!: string;
  public iframeSrc: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.generateIframeSrc();
  }

  generateIframeSrc(): void {
    const iframeContent = `
      <html>
        <head>
          <base target='_blank' />
          <script src="${this.gistUrl}"></script>
          <link rel="stylesheet" href="https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/monokai.css">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
          <style>
            body {
              font: 16px 'Open Sans', sans-serif;
            }
            body .gist .gist-file {
              border-color: #555 #555 #444
            }
            body .gist .gist-data {
              border-color: #555
            }
            body .gist .gist-meta {
              color: #ffffff;
              background: #373737; 
            }
            body .gist .gist-meta a {
              color: #ffffff
            }
            body .gist .gist-data .pl-s .pl-s1 {
              color: #a5c261
            }
            body .gist .highlight {
              background: #272822;
            }
          </style>
        </head>
        <body></body>
      </html>
    `;

    const blob = new Blob([iframeContent], { type: 'text/html' });
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
  }
}
