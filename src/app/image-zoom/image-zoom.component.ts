import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent {
  @ViewChild("resizableImage") resizableImage!: ElementRef;
  isDragging = false;
  initialMouseX: number = 0; 
  initialMouseY: number = 0; 
  initialDivLeft: number = 0; 
  initialDivTop: number = 0;
  currentWidth = 500;
  initialWidth = 500;
  @Input() set width(value: number) {
    this.currentWidth = value;
    this.initialWidth = value;
  }
  wrapperHeight = 600;
  @Input() set height(value: number) {
    this.wrapperHeight = value;
  }
  currentRotation = 0;

  public imgUrl: string = ""
  @Input() set image(value: string) {
    this.imgUrl = value;
  }

  constructor() {}

  onMousedown(event: any) {
    event.preventDefault();

    this.isDragging = true;
    this.initialMouseX = event.clientX;
    this.initialMouseY = event.clientY;
    this.initialDivLeft = this.resizableImage.nativeElement.offsetLeft;
    this.initialDivTop = this.resizableImage.nativeElement.offsetTop;
    this.resizableImage.nativeElement.style.cursor = 'grabbing';
  }

  onMouseMove(event: any) {
      if (this.isDragging) {
          const deltaX = event.clientX - this.initialMouseX;
          const deltaY = event.clientY - this.initialMouseY;

          this.resizableImage.nativeElement.style.left = `${this.initialDivLeft + deltaX}px`;
          this.resizableImage.nativeElement.style.top = `${this.initialDivTop + deltaY}px`;
      }
  }

  onMouseUp() {
      this.isDragging = false;
      this.resizableImage.nativeElement.style.cursor = 'grab';
  }

  onWheel(event: any) {
      event.preventDefault();
      const direction = event.deltaY > 0 ? -1 : 1;

      this.currentWidth += direction * 10;
      this.resizableImage.nativeElement.style.width = `${this.currentWidth}px`;
  }

  rotate() {
      this.currentRotation += 90;
      this.updateDivStyles();
  }

  zoomIn() {
      this.currentWidth += 20;
      this.updateDivStyles();
  }

  zoomOut() {
      this.currentWidth -= 20;
      this.updateDivStyles();
  }

  updateDivStyles() {
    this.resizableImage.nativeElement.style.transform = `translate(-50%, -50%) rotate(${this.currentRotation}deg)`;
    this.resizableImage.nativeElement.style.width = `${this.currentWidth}px`;
  }

}