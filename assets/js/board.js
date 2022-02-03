class Board {
  constructor (size_y, size_x) {
    this.size_y = size_y
    this.size_x = size_x
    this.initBoard()
  }

  initBoard () {
    const container = document.getElementById('board_container')
    const tableau = document.createElement('table')
    tableau.setAttribute('class', 'board')
    container.appendChild(tableau)
    for (let hauteur = 0; hauteur < this.size_y; hauteur++) {
      const line = document.createElement('tr')
      for (let largeur = 0; largeur < this.size_x; largeur++) {
        const cell = document.createElement('td')
        cell.setAttribute('id', 'case_' + hauteur + '_' + largeur)
        line.appendChild(cell)
      }
      tableau.appendChild(line)
    }
  }
}
