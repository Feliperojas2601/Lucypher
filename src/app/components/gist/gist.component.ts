import { ChangeDetectionStrategy, Component, inject, input, output, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gist',
  imports: [],
  templateUrl: './gist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GistComponent implements OnInit {
    gistUrl = input.required<string>();
    loading = output<boolean>();
    iframeSrc: SafeResourceUrl = '';

    sanitizer = inject(DomSanitizer);

    ngOnInit() {
        this.loading.emit(true);
        this.generateIframeSrc();
        this.loading.emit(false);
    }

    generateIframeSrc(): void {
        const iframeContent = `
          <html>
            <head>
              <base target='_blank' />
              <script src="${this.gistUrl()}"></script>
              <link rel="stylesheet" href="https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/monokai.css">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
              <style>
                html, body {
                  margin: 0;
                  padding: 0;
                  border: none;
                  background: transparent;
                }
                body {
                  font: 16px 'Open Sans', sans-serif;
                }
                body .gist .gist-file {
                  border-color: #555 #555 #444;
                  border-radius: 0;
                  margin-bottom: 0;
                }
                body .gist .gist-data {
                  border-color: #555;
                  border-radius: 0;
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
                /* Custom scrollbar styles */
                ::-webkit-scrollbar {
                  width: 10px;
                }
                ::-webkit-scrollbar-track {
                  background: #272822;
                }
                ::-webkit-scrollbar-thumb {
                  background: #555;
                  border-radius: 5px;
                }
                ::-webkit-scrollbar-thumb:hover {
                  background: #666;
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
