class Obstacle {
    position = {}
    constructor ( position, nom) {
      this.position.x = position.x
      this.position.y = position.y
      this.nom = nom
      this.initObstacle ()
    }

    initObstacle () {
        let obstacleContainer = document.createElement('div')
        obstacleContainer.setAttribute('class', 'obstacle')
        let current_cell = document.getElementById(
          'case_' + this.position.y + '_' + this.position.x
        )
        current_cell.appendChild(obstacleContainer)
        // console.log('l\'obstacle est dans la case ' + current_cell.id + ' avec comme nom ' + this.nom + ' ' + this.position.x + 'x :' + this.position.y + 'y')
      }
}
