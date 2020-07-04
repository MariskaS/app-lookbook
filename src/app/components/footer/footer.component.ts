import {Component} from '@angular/core';
import {FOOTER_CONTENT} from '../../constants';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerContent = FOOTER_CONTENT;
}
