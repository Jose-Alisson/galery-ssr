import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileListService } from './services/FileList/file-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'galery';

  photos: any[] = []

  fileList = inject(FileListService)

  ngOnInit(): void {
    this.fileList.list().subscribe(data => {
      this.photos = data.photos
    })
  }
}
