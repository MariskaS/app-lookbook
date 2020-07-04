import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: '[app-button]',
  template: `
    <svg-icon class="la-btn__ico"
              *ngIf="iconName"
              aria-hidden="true"
              src="assets/icons/{{iconName}}.svg"></svg-icon>
    <span *ngIf="theme !== 'buttonIcon'"><ng-content></ng-content></span>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() theme: 'primary' | 'buttonIcon' | 'buttonLink' | 'buttonRadio' = 'primary';
  @Input() iconName = '';

  @HostBinding('class.la-btn--primary')
  get isPrimary(): boolean {
    return this.theme === 'primary';
  }

  @HostBinding('class.la-btn--icon')
  get isIcon(): boolean {
    return this.theme === 'buttonIcon';
  }

  @HostBinding('class.la-btn--link')
  get isLink(): boolean {
    return this.theme === 'buttonLink';
  }

  @HostBinding('class.la-btn--radio')
  get isRadio(): boolean {
    return this.theme === 'buttonRadio';
  }
}
