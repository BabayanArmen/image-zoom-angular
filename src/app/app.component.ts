import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-zoom';

  images = [
    "https://cdn.pixabay.com/photo/2023/11/04/07/57/owl-8364426_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/10/07/59/lake-8305673_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/01/11/12/hallstatt-8357170_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_1280.jpg",
    "https://img.freepik.com/free-photo/view-3d-religious-cross-with-gloomy-weather_23-2150945823.jpg?t=st=1699785706~exp=1699789306~hmac=f9589d6b2cec7ded21985854ba36b6b86bd2faf8d86ef59e5621f99ee5b933f9&w=1060",
    "https://cdn.pixabay.com/photo/2023/09/04/17/04/saturn-8233220_1280.png",
    "https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

}
