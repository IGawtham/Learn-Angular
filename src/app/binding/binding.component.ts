import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde asperiores, et aspernatur quas harum earum! Exercitationem fugiat commodi, id cumque sed perferendis reiciendis ullam fuga in illo earum obcaecati?
  Consectetur illum explicabo beatae molestias corporis quisquam.Vero cumque, totam in nesciunt amet voluptates eveniet ipsum eum optio tenetur praesentium veritatis ea facere saepe magnam rerum ab corrupti nobis vel.
Sit beatae magni ab facere aperiam eum ducimus itaque hic illum, nostrum doloremque inventore voluptatibus distinctio molestiae, obcaecati soluta modi deserunt vitae enim odit ? Sapiente placeat voluptates suscipit cum provident.
  Tempore, vel aliquam quam iste esse commodi, soluta sunt, fuga quis natus perspiciatis reprehenderit ? Libero voluptate earum laboriosam excepturi deleniti maiores quaerat corrupti aliquid ? Autem similique ad ipsam praesentium labore.
Laboriosam sequi porro unde magnam! Mollitia repellendus, veniam velit veritatis voluptatibus ipsam temporibus animi ex rem doloremque, consectetur sequi nobis tempora.Nulla placeat illo eaque.Ex modi saepe earum officiis.`
  onEvent(temp) {
    console.log(temp)
  }
  constructor() {

  }

  ngOnInit() {
  }

}
