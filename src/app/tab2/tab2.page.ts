import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  items: string[] = [];
  itemsFiltrados: string[] = [];
  busquedasRecientes: string[] = []; // Búsquedas recientes
  verbusquedasRecientes: boolean = false; // Control para mostrar búsquedas recientes

  // Datos de tendencias
  trends = [
    {
      title: 'Bizcochos',
      image: 'assets/bizcocho.jpg',
    },
    {
      title: 'Bollos',
      image: 'assets/bollos.jpg',
    },
    {
      title: 'Cheesecake',
      image: 'assets/cheesecake.jpg',
    },
    {
      title: 'Galletas',
      image: 'assets/galletas.jpg',
    },
    {
      title: 'Muffins',
      image: 'assets/muffins.jpg',
    },
    {
      title: 'Tartas',
      image: 'assets/tarta.jpg',
    },
  ];



  constructor() {
    this.itemsFiltrados = [...this.items];
  }

  onSearch(event: any) {
    const query = event.target.value?.toLowerCase() || '';
    this.verbusquedasRecientes = false; // Oculta las búsquedas recientes al escribir

    if (query.trim().length === 0) {
      this.itemsFiltrados = [...this.items];
    } else {
      this.itemsFiltrados = this.items.filter(item =>
        item.toLowerCase().includes(query)
      );

      // Guarda la búsqueda solo si es nueva y no está vacía
      if (!this.busquedasRecientes.includes(query) && query.trim() !== '') {
        this.busquedasRecientes.unshift(query);
        // Limita la lista de recientes a un máximo de 5 elementos
        if (this.busquedasRecientes.length > 5) {
          this.busquedasRecientes.pop();
        }
      }
    }
  }

  onBlurSearchBar(event: any) {
    // Retrasa el ocultado para permitir seleccionar un elemento reciente
    setTimeout(() => {
      this.verbusquedasRecientes = false;
    }, 200);
  }

  onRecentSearchClick(search: string) {
    // Aplica la búsqueda al hacer clic en un elemento reciente
    this.itemsFiltrados = this.items.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    this.verbusquedasRecientes = false;
  }

  onTrendClick(trend: any) {
    console.log(`Clicked on trend: ${trend.title}`);
  }



}
