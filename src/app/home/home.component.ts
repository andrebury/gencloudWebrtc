import { Component, OnInit } from '@angular/core';
import { GenesysCloudService } from '../genesys-cloud.service';
import * as platformClient from 'purecloud-platform-client-v2';
import { GenesysCloudWebrtcSdk } from 'genesys-cloud-webrtc-sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails?: platformClient.Models.UserMe;
  userAvatar: string = 'assets/default-face.png';

  constructor(private genesysCloudService: GenesysCloudService) {
  }

  ngOnInit(): void {
   this.getUserDetails();
  }

  createCall(){
    this.genesysCloudService.createCall()
  }

  disconnectCall(){
    this.genesysCloudService.disconnectCall()
  }

  getUserDetails(){
    this.genesysCloudService.getUserMe()
      .subscribe(userDetails => {
        this.userDetails = userDetails
        this.userAvatar = userDetails.images?.[userDetails.images.length - 1]
                          .imageUri || this.userAvatar;
        this.genesysCloudService.webrtcsdk()
      });
  }
}
