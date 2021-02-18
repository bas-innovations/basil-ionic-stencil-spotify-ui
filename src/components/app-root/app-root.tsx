import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to="/home" />
          <ion-route component="app-tabs">

            <ion-route url="/home" component="tab-home">
              <ion-route component="app-home" />
            </ion-route>

            <ion-route url="/profile" component="tab-profile">
              <ion-route url="/:name" component="app-profile"/>
            </ion-route>

            <ion-route url="/album" component="tab-album">
              <ion-route url="/:albumtitle" component="page-album" />
            </ion-route>

          </ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}