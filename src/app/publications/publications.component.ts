import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  public espaceVie = [
    { src: "../../assets/publications/espaceVie/1.jpg"},
    { src: "../../assets/publications/espaceVie/2.jpg"}
  ]

  public a215 = [
    {src: "../../assets/publications/a+215/1.jpg"},
    {src: "../../assets/publications/a+215/2.jpg"},
    {src: "../../assets/publications/a+215/3.jpg"},
    {src: "../../assets/publications/a+215/4.jpg"},
    {src: "../../assets/publications/a+215/5.jpg"}
  ]
  
  public a2003 = [
    {src: "../../assets/publications/a+2003/1.jpg"},
    {src: "../../assets/publications/a+2003/2.jpg"},
    {src: "../../assets/publications/a+2003/3.jpg"},
    {src: "../../assets/publications/a+2003/4.jpg"},
    {src: "../../assets/publications/a+2003/5.jpg"},
    {src: "../../assets/publications/a+2003/6.jpg"}
  ]
  
  public au = [
    {src: "../../assets/publications/a+u/1.jpg"},
    {src: "../../assets/publications/a+u/2.jpg"},
    {src: "../../assets/publications/a+u/3.jpg"},
    {src: "../../assets/publications/a+u/4.jpg"},
    {src: "../../assets/publications/a+u/5.jpg"},
    {src: "../../assets/publications/a+u/6.jpg"},
    {src: "../../assets/publications/a+u/7.jpg"},
    {src: "../../assets/publications/a+u/8.jpg"}
  ]
  
  public architectureRecords = [
    {src: "../../assets/publications/architecturalRecords/1.jpg"},
    {src: "../../assets/publications/architecturalRecords/2.jpg"},
    {src: "../../assets/publications/architecturalRecords/3.jpg"},
    {src: "../../assets/publications/architecturalRecords/4.jpg"},
    {src: "../../assets/publications/architecturalRecords/5.jpg"},
    {src: "../../assets/publications/architecturalRecords/6.jpg"},
    {src: "../../assets/publications/architecturalRecords/7.jpg"},
    {src: "../../assets/publications/architecturalRecords/8.jpg"},
    {src: "../../assets/publications/architecturalRecords/9.jpg"}
    ]
  
  public architrave = [
    {src: "../../assets/publications/architrave/1.jpg"},
    {src: "../../assets/publications/architrave/2.jpg"},
    {src: "../../assets/publications/architrave/3.jpg"}
  ]
  
  public avenir25 = [
    {src: "../../assets/publications/avenir25/1.jpg"}
  ]
  
  public belgiumNew = [
    {src: "../../assets/publications/belgiumNew/1.jpg"},
    {src: "../../assets/publications/belgiumNew/2.jpg"},
    {src: "../../assets/publications/belgiumNew/3.jpg"}
  ]
  
  public bouwkroniek = [
    {src: "../../assets/publications/bouwkroniek/1.jpg"},
    {src: "../../assets/publications/bouwkroniek/2.jpg"},
    {src: "../../assets/publications/bouwkroniek/3.jpg"}
  ]
  
  public desiredPlaces = [
    {src: "../../assets/publications/desiredPlaces/1.jpg"}
  ]
  
  public echo16 = [
    {src: "../../assets/publications/echo16/1.jpg"}
  ]
  
  public elleWonen = [
    {src: "../../assets/publications/elleWonen/1.jpg"}
  ]
  
  public essentielleVino = [
    {src: "../../assets/publications/essentielleVino/1.jpg"}
  ]
  
  public floatingGardens = [
    {src: "../../assets/publications/floatingGardens/1.jpg"},
    {src: "../../assets/publications/floatingGardens/2.jpg"},
    {src: "../../assets/publications/floatingGardens/3.jpg"},
    {src: "../../assets/publications/floatingGardens/4.jpg"}
  ]
  
  public formawood = [
    {src: "../../assets/publications/formawood/1.jpg"},
    {src: "../../assets/publications/formawood/2.jpg"}
  ]
  
  public hetOutblad = [
    {src: "../../assets/publications/hetOutblad/1.jpg"},
    {src: "../../assets/publications/hetOutblad/2.jpg"},
    {src: "../../assets/publications/hetOutblad/3.jpg"},
    {src: "../../assets/publications/hetOutblad/4.jpg"},
    {src: "../../assets/publications/hetOutblad/5.jpg"},
    {src: "../../assets/publications/hetOutblad/6.jpg"},
    {src: "../../assets/publications/hetOutblad/7.jpg"}
  ]
  
  public laLibre = [
    {src: "../../assets/publications/laLibre/1.jpg"},
    {src: "../../assets/publications/laLibre/2.jpg"},
    {src: "../../assets/publications/laLibre/3.jpg"},
    {src: "../../assets/publications/laLibre/4.jpg"},
    {src: "../../assets/publications/laLibre/5.jpg"},
    {src: "../../assets/publications/laLibre/6.jpg"},
    {src: "../../assets/publications/laLibre/7.jpg"},
    {src: "../../assets/publications/laLibre/8.jpg"},
    {src: "../../assets/publications/laLibre/9.jpg"}
  ]
  
  public laLibre2006 = [
    {src: "../../assets/publications/laLibre2006/1.jpg"},
    {src: "../../assets/publications/laLibre2006/2.jpg"},
    {src: "../../assets/publications/laLibre2006/3.jpg"},
    {src: "../../assets/publications/laLibre2006/4.jpg"},
    {src: "../../assets/publications/laLibre2006/5.jpg"},
    {src: "../../assets/publications/laLibre2006/6.jpg"},
    {src: "../../assets/publications/laLibre2006/7.jpg"},
    {src: "../../assets/publications/laLibre2006/8.jpg"},
    {src: "../../assets/publications/laLibre2006/9.jpg"}
  ]
  
  public quid2531 = [
    {src: "../../assets/publications/quid25-31/1.jpg"}
  ]
  
  public sabato = [
    {src: "../../assets/publications/sabato/1.jpg"},
    {src: "../../assets/publications/sabato/2.jpg"},
    {src: "../../assets/publications/sabato/3.jpg"},
    {src: "../../assets/publications/sabato/4.jpg"},
    {src: "../../assets/publications/sabato/5.jpg"},
    {src: "../../assets/publications/sabato/6.jpg"},
    {src: "../../assets/publications/sabato/7.jpg"}
  ]
  
  public theWord = [
    {src: "../../assets/publications/theWord/1.jpg"},
    {src: "../../assets/publications/theWord/2.jpg"}
  ]
  
  public theWord2014 = [
    {src: "../../assets/publications/theWord2014/1.jpg"},
    {src: "../../assets/publications/theWord2014/2.jpg"}
  ]
  
  public trends04 = [
    {src: "../../assets/publications/trends04/1.jpg"},
    {src: "../../assets/publications/trends04/2.jpg"},
    {src: "../../assets/publications/trends04/3.jpg"},
    {src: "../../assets/publications/trends04/4.jpg"}
  ]

  public houtinfobois = [
    {src: "../../assets/publications/houtinfobois/1.jpg"}
  ]

  public architectenkrant = [
    {src: "../../assets/publications/architectenkrant/1.jpg"}
  ]
  
  constructor() {

   }

  ngOnInit(): void {
  }

}
