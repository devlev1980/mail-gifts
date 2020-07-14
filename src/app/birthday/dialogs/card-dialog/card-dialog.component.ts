import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {DialogService} from '../../../services/dialog.service';
import {ICard} from '../../../sidebar/models/gift-cards';
import html2canvas from 'html2canvas';

@Component({
  selector: 'yl-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {
  display$: Observable<string>;
  card$: Observable<ICard>;
  card: ICard;
  isFlipped: boolean = false;
  @ViewChild('imgContainerRef', {static: false}) imgContainerRef: ElementRef;
  isRecording = false;
  recordedTime;
  blobUrl;

  constructor(private dialogService: DialogService, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.display$ = this.dialogService.watchDialog();
    this.card$ = this.dialogService.getDialogData();

    // this.card$.subscribe(card => {
    //   this.card = card;
    // });


  }

  closeDialog() {
    this.isFlipped = false;
    this.dialogService.closeDialog();
    // this.card$ = this.dialogService.getDialogData();

  }


  onSave() {
    const element = document.querySelector('.card') as HTMLElement;
    console.log(element);
    html2canvas(element).then((canvas) => {
      canvas.toBlob((blob) => {
        let link = document.createElement('a');
        link.download = 'image.png';
        link.href = URL.createObjectURL(blob);
        link.click();
        // window.saveAs(blob, 'image.png');
      }, 'image,png');
    });
    this.dialogService.closeDialog();
  }

  loadCard() {
  }
}
