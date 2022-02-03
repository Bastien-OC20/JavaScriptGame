class Items {
    position = {}
    constructor ( position, nom) {
      this.position.x = position.x
      this.position.y = position.y
      this.nom = nom
      this.initItem ()
    }

    initItem () {
        let obstacleContainer = document.createElement('div')
        obstacleContainer.setAttribute('class', 'item')
        let current_cell = document.getElementById(
          'case_' + this.position.y + '_' + this.position.x
        )
        current_cell.appendChild(obstacleContainer)
      }
}