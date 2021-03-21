import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { faCoffee,   } from '@fortawesome/free-solid-svg-icons';

// CommonJS


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'listCrud';
  titulo:any = ""
  fileToUpload: any = null;
  
  personEdit: any = {id: "",
  titulo: "",
  sumario: "",
  lugar: "",
  fecha: "",
  autor: "",
  relevante: false,
  contenido: "",
  categoria: {
      id: "",
      nombre: ""
  },
  imagenes: [
     
  ]};

  //Swal = require('sweetalert2')
  personList: Array<any> = [
    {
      id: "1",
      titulo: "Quirino inaugura Telebachillerato en Aguacaliente de Cebada, en Sinaloa municipio",
      sumario: "Con este nuevo plantel, ya son seis nuevas escuelas construidas en la zona serrana, con una inversión de 69 millones de pesos",
      lugar: "Aguacaliente de Cebada, Sin.",
      fecha: "2021-02-24T07:00:00.000Z",
      autor: "Luis Ernesto Reyes",
      relevante: true,
      contenido: "Con el propósito de brindar a los jóvenes de la zona serrana las mismas oportunidades para que continúen sus estudios, el gobernador Quirino Ordaz Coppel inauguró el Telebachillerato de la comunidad Aguacaliente de Cebada, en el municipio de Sinaloa, ubicada en las estribaciones de la zona de los altos, y que viene a sumarse a las construidas en los últimos meses en San José de las Delicias, San José de Gracia y Genaro Estrada.\n\nEl mandatario estatal arribó a esta pequeña y apartada población acompañado por la presidenta municipal, María Beatriz León Rubio, para entregar esta moderna escuela compuesta por tres aulas debidamente refrigeradas, servicios sanitarios, plaza cívica y cerca perimetral, en donde se invirtieron 3.4 millones de pesos, y que alberga a 120 alumnos tanto de esta comunidad como de las rancherías cercanas.\n\nEn su mensaje a los jóvenes y a sus padres que lo recibieron en el nuevo plantel, el gobernador del estado señaló que apostarle a la educación de las nuevas generaciones es lo más importante, y lo mejor es que los niños y jóvenes puedan estudiar en espacios dignos como éste, con las mismas condiciones en que los hacen los estudiantes en las grandes ciudades.\n\nOrdaz Coppel destacó que éste ha sido su objetivo y por eso se dio a la tarea de eliminar las aulas de cartón, y actualmente, desde el año pasado, se levantó bandera blanca en este sentido, pues en todo Sinaloa ya no existen salones de clases improvisados, pues lo que habían se derrumbaron para dar paso a la construcción de aulas y con aire acondicionado, y todos los servicios.\n\n“Lo más importante son los hijos, es la educación, es apostarle y apoyar la formación de los niños y de las niñas, y qué mejor que tengan un espacio decoroso, digno, y por eso ya tenemos seis nuevas escuelas aquí en el municipio de Sinaloa, en la sierra, que no existían o que había aulas de cartón, eso ya no existe en Sinaloa, eso es una gran ventaja”, destacó.\n\nA su vez, la alcaldesa María Beatriz León Rubio le agradeció al gobernador Quirino Ordaz Coppel la construcción de esta nueva escuela, que como lo mencionó el mandatario estatal, ya es la sexta que se entrega en esta administración.\n\n“Gobernador, quiero decirle que este telebachillerato le va a cambiar la vida a la gente de la Aguacaliente de Cebada y sus alrededores”, reconoció la presidenta municipal, quien además se comprometió a construir la techumbre para la plaza cívica.\n\nLuego de visitar las tres aulas y cortar el listón simbólico de inauguración de la escuela, el gobernador Quirino Ordaz Coppel, fiel a su costumbre, platicó con la comunidad, sin ningún protocolo y para escuchar de viva voz sus opiniones, y la señora Loreta Ferreira, madre de familia del plantel aprovechó para expresarle su gratitud.\n\n“Gracias porque se equipó nuestra comunidad, es un gran beneficio que es para toda la gente, es lo mejor que nos pudo haber traído, señor gobernador”, le dijo la señora visiblemente emocionada.\n\nLo mismo le expresaron varios jóvenes estudiantes de este Telebachillerato, quienes recordaron que antes cursaban sus clases en una pequeña aula muy deteriorada, y ahora ya cuentan con una moderna escuela igual que las que existen en las grandes ciudades.\n\nAl dar la bienvenida, el director del Instituto Sinaloense de Infraestructura Física Educativa (ISIFE), Álvaro Ruelas Echave, dio a conocer que ya son 26 escuelas construidas en esta administración y la sexta en Sinaloa municipio, que representan una inversión en su conjunto de 2 mil 700 millones de pesos, de los cuales 69 se ejercieron tanto sólo en este municipio.",
      categoria: {
          id: "4",
          nombre: "Cultura y Sociedad"
      },
      imagenes: [
          {
              id: "1",
              imagenUrl: "https://sites.google.com/site/tbccoahuila/_/rsrc/1468008973631/c-logotipo-tbc/TBC.jpg"
          },
          {
            id: "2",
            imagenUrl: "https://sites.google.com/site/tbccoahuila/_/rsrc/1468008973631/c-logotipo-tbc/TBC.jpg"
        }
      ]
  },
  {
    id: "2",
    titulo: "Ser Quinto",
    sumario: "Sumiro",
    lugar: "Aguacaliente de Cebada, Sin.",
    fecha: "2021-02-24T07:00:00.000Z",
    autor: "Luis Ernesto Reyes",
    relevante: true,
    contenido: "Con el propósito de brindar a los jóvenes de la zona serrana las mismas oportunidades para que continúen sus estudios, el gobernador Quirino Ordaz Coppel inauguró el Telebachillerato de la comunidad Aguacaliente de Cebada, en el municipio de Sinaloa, ubicada en las estribaciones de la zona de los altos, y que viene a sumarse a las construidas en los últimos meses en San José de las Delicias, San José de Gracia y Genaro Estrada.\n\nEl mandatario estatal arribó a esta pequeña y apartada población acompañado por la presidenta municipal, María Beatriz León Rubio, para entregar esta moderna escuela compuesta por tres aulas debidamente refrigeradas, servicios sanitarios, plaza cívica y cerca perimetral, en donde se invirtieron 3.4 millones de pesos, y que alberga a 120 alumnos tanto de esta comunidad como de las rancherías cercanas.\n\nEn su mensaje a los jóvenes y a sus padres que lo recibieron en el nuevo plantel, el gobernador del estado señaló que apostarle a la educación de las nuevas generaciones es lo más importante, y lo mejor es que los niños y jóvenes puedan estudiar en espacios dignos como éste, con las mismas condiciones en que los hacen los estudiantes en las grandes ciudades.\n\nOrdaz Coppel destacó que éste ha sido su objetivo y por eso se dio a la tarea de eliminar las aulas de cartón, y actualmente, desde el año pasado, se levantó bandera blanca en este sentido, pues en todo Sinaloa ya no existen salones de clases improvisados, pues lo que habían se derrumbaron para dar paso a la construcción de aulas y con aire acondicionado, y todos los servicios.\n\n“Lo más importante son los hijos, es la educación, es apostarle y apoyar la formación de los niños y de las niñas, y qué mejor que tengan un espacio decoroso, digno, y por eso ya tenemos seis nuevas escuelas aquí en el municipio de Sinaloa, en la sierra, que no existían o que había aulas de cartón, eso ya no existe en Sinaloa, eso es una gran ventaja”, destacó.\n\nA su vez, la alcaldesa María Beatriz León Rubio le agradeció al gobernador Quirino Ordaz Coppel la construcción de esta nueva escuela, que como lo mencionó el mandatario estatal, ya es la sexta que se entrega en esta administración.\n\n“Gobernador, quiero decirle que este telebachillerato le va a cambiar la vida a la gente de la Aguacaliente de Cebada y sus alrededores”, reconoció la presidenta municipal, quien además se comprometió a construir la techumbre para la plaza cívica.\n\nLuego de visitar las tres aulas y cortar el listón simbólico de inauguración de la escuela, el gobernador Quirino Ordaz Coppel, fiel a su costumbre, platicó con la comunidad, sin ningún protocolo y para escuchar de viva voz sus opiniones, y la señora Loreta Ferreira, madre de familia del plantel aprovechó para expresarle su gratitud.\n\n“Gracias porque se equipó nuestra comunidad, es un gran beneficio que es para toda la gente, es lo mejor que nos pudo haber traído, señor gobernador”, le dijo la señora visiblemente emocionada.\n\nLo mismo le expresaron varios jóvenes estudiantes de este Telebachillerato, quienes recordaron que antes cursaban sus clases en una pequeña aula muy deteriorada, y ahora ya cuentan con una moderna escuela igual que las que existen en las grandes ciudades.\n\nAl dar la bienvenida, el director del Instituto Sinaloense de Infraestructura Física Educativa (ISIFE), Álvaro Ruelas Echave, dio a conocer que ya son 26 escuelas construidas en esta administración y la sexta en Sinaloa municipio, que representan una inversión en su conjunto de 2 mil 700 millones de pesos, de los cuales 69 se ejercieron tanto sólo en este municipio.",
    categoria: {
        id: "4",
        nombre: "Cultura y Sociedad"
    },
    imagenes: [
        {
            id: "1",
            imagenUrl: "https://sites.google.com/site/tbccoahuila/_/rsrc/1468008973631/c-logotipo-tbc/TBC.jpg"
        }
    ]
},  
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }


  openModal(person: any){
    this.personEdit = person
  }

  RegisterNoticia(){
    
   /* Swal.fire({
      title: 'Actualozación',
      text: '',
      icon: 'success',
      confirmButtonText: 'ok'
    })*/
    if(this.personEdit.id < "0"){
      this.personEdit.id = this.personList.length +2
      this.personList.push(this.personEdit);
      if(this.fileToUpload != null){
        this.personEdit.imagenes.push({ "id":"3",
        imagenUrl: "https://sites.google.com/site/tbccoahuila/_/rsrc/1468008973631/c-logotipo-tbc/TBC.jpg"
        })
      }
    }else if(this.fileToUpload != null){
      this.personEdit.imagenes.push({ "id":"3",
      imagenUrl: "https://sites.google.com/site/tbccoahuila/_/rsrc/1468008973631/c-logotipo-tbc/TBC.jpg"
      })
    }
    this.limpiar()
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)
}


limpiar(){
  this.personEdit = {id: "",
  titulo: "",
  sumario: "",
  lugar: "",
  fecha: "",
  autor: "",
  relevante: false,
  contenido: "",
  categoria: {
      id: "",
      nombre: ""
  },
  imagenes: [
      {
          id: "",
          imagenUrl: ""
      }
  ]};
}

eliminar(idList="", idimg=""){
  console.log("Eliminar")
  var list = this.personList.find(element => element.id == idList);
  for (var index in list.imagenes){
    console.log(index)
    if(list.imagenes[index].id == idimg){
      list.imagenes.splice(index, 1);   
    }
  }
}
}
