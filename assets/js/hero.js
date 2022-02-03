// Hero.js

/*     Déclaration de la Class Hero (Personnage) :
       DEf : Position (x,y), nom  et avatar  de l'objet   */
       class Hero {
        position = {};
        constructor(position, nom) {
          this.position.x = position.x;
          this.position.y = position.y;
          this.nom = nom;
          this.sprite = "./assets/img/hero/Luffy.png";
          this.spriteTop = "./assets/img/hero/LuffyTop.png";
          this.spriteRight = "./assets/img/hero/LuffyRight.png";
          this.spriteBottom = "./assets/img/hero/LuffyDown.png";
          this.spriteLeft = "./assets/img/hero/LuffyLeft.png";
          this.initHero();
          this.setMoveListener();
        }
      
        initHero() {
          let heroContainer = document.createElement("img");
          heroContainer.setAttribute("id", "herocontainer_" + this.nom);
          heroContainer.src = this.sprite;
          let current_cell = document.getElementById(
            "case_" + this.position.y + "_" + this.position.x
          );
          current_cell.appendChild(heroContainer);
        }
      
        move(positionx, positiony, size_x, size_y) {
          this.position.x += positionx;
          this.position.y += positiony;
          this.boardSize_x = size_x;
          this.boardSize_y = size_y;
          this.windonPopUp();
          let positionY = this.position.y;
          let positionX = this.position.x;
          // console.log(positionX, positionY)
          /* condition : Si obstacle le personnage n'avance pas       */
          if (
            positionX === this.boardSize_x ||
            positionX === 0 ||
            positionX === this.boardSize_x ||
            positionX === 23 ||
            positionY === this.boardSize_y ||
            positionY === 0 ||
            positionY === this.boardSize_y ||
            positionY === 23 ||
            // bloc 4
            (positionX === 1 && positionY === 20) ||
            (positionX === 2 && positionY === 17) ||
            (positionX === 2 && positionY === 18) ||
            (positionX === 2 && positionY === 19) ||
            (positionX === 2 && positionY === 20) ||
            (positionX === 3 && positionY === 16) ||
            (positionX === 3 && positionY === 17) ||
            (positionX === 3 && positionY === 18) ||
            (positionX === 3 && positionY === 19) ||
            (positionX === 3 && positionY === 20) ||
            (positionX === 3 && positionY === 21) ||
            (positionX === 4 && positionY === 16) ||
            (positionX === 4 && positionY === 17) ||
            (positionX === 4 && positionY === 18) ||
            (positionX === 4 && positionY === 19) ||
            (positionX === 4 && positionY === 20) ||
            (positionX === 4 && positionY === 21) ||
            (positionX === 5 && positionY === 16) ||
            (positionX === 5 && positionY === 17) ||
            (positionX === 5 && positionY === 18) ||
            (positionX === 5 && positionY === 19) ||
            (positionX === 5 && positionY === 20) ||
            (positionX === 5 && positionY === 21) ||
            (positionX === 6 && positionY === 17) ||
            (positionX === 6 && positionY === 18) ||
            (positionX === 6 && positionY === 19) ||
            (positionX === 6 && positionY === 20) ||
            (positionX === 7 && positionY === 20) ||
            (positionX === 8 && positionY === 6) ||
            (positionX === 9 && positionY === 3) ||
            (positionX === 9 && positionY === 4) ||
            (positionX === 9 && positionY === 5) ||
            (positionX === 9 && positionY === 6) ||
            (positionX === 9 && positionY === 7) ||
            (positionX === 10 && positionY === 2) ||
            (positionX === 10 && positionY === 3) ||
            (positionX === 10 && positionY === 4) ||
            (positionX === 10 && positionY === 5) ||
            (positionX === 10 && positionY === 6) ||
            (positionX === 10 && positionY === 7) ||
            (positionX === 10 && positionY === 8) ||
            (positionX === 11 && positionY === 2) ||
            (positionX === 11 && positionY === 3) ||
            (positionX === 11 && positionY === 4) ||
            (positionX === 11 && positionY === 5) ||
            (positionX === 11 && positionY === 6) ||
            (positionX === 11 && positionY === 7) ||
            (positionX === 11 && positionY === 8) ||
            (positionX === 12 && positionY === 3) ||
            (positionX === 12 && positionY === 4) ||
            (positionX === 12 && positionY === 5) ||
            (positionX === 12 && positionY === 6) ||
            (positionX === 12 && positionY === 7) ||
            (positionX === 12 && positionY === 8) ||
            (positionX === 12 && positionY === 9) ||
            (positionX === 13 && positionY === 3) ||
            (positionX === 13 && positionY === 4) ||
            (positionX === 13 && positionY === 5) ||
            (positionX === 13 && positionY === 6) ||
            (positionX === 13 && positionY === 7) ||
            (positionX === 13 && positionY === 8) ||
            (positionX === 14 && positionY === 4) ||
            (positionX === 14 && positionY === 5) ||
            (positionX === 14 && positionY === 6) ||
            (positionX === 14 && positionY === 7) ||
            // bloc 2
            (positionX === 17 && positionY === 1) ||
            (positionX === 17 && positionY === 2) ||
            (positionX === 17 && positionY === 3) ||
            (positionX === 17 && positionY === 4) ||
            (positionX === 18 && positionY === 1) ||
            (positionX === 18 && positionY === 2) ||
            (positionX === 18 && positionY === 3) ||
            (positionX === 18 && positionY === 4) ||
            (positionX === 19 && positionY === 1) ||
            (positionX === 19 && positionY === 2) ||
            (positionX === 19 && positionY === 3) ||
            (positionX === 19 && positionY === 4) ||
            (positionX === 20 && positionY === 1) ||
            (positionX === 20 && positionY === 2) ||
            (positionX === 20 && positionY === 3) ||
            (positionX === 20 && positionY === 4) ||
            (positionX === 21 && positionY === 1) ||
            (positionX === 21 && positionY === 2) ||
            (positionX === 21 && positionY === 3) ||
            (positionX === 21 && positionY === 4) ||
            (positionX === 22 && positionY === 1) ||
            (positionX === 22 && positionY === 2) ||
            (positionX === 22 && positionY === 3) ||
            (positionX === 22 && positionY === 4) ||
            // bloc 3
            (positionX === 19 && positionY === 15) ||
            (positionX === 18 && positionY === 16) ||
            (positionX === 18 && positionY === 15) ||
            (positionX === 17 && positionY === 14) ||
            (positionX === 17 && positionY === 15) ||
            (positionX === 17 && positionY === 16) ||
            (positionX === 16 && positionY === 13) ||
            (positionX === 16 && positionY === 14) ||
            (positionX === 16 && positionY === 15) ||
            (positionX === 16 && positionY === 16) ||
            (positionX === 16 && positionY === 17) ||
            (positionX === 17 && positionY === 7) ||
            (positionX === 15 && positionY === 13) ||
            (positionX === 15 && positionY === 14) ||
            (positionX === 15 && positionY === 15) ||
            (positionX === 15 && positionY === 16) ||
            (positionX === 15 && positionY === 17) ||
            (positionX === 14 && positionY === 13) ||
            (positionX === 14 && positionY === 14) ||
            (positionX === 14 && positionY === 15) ||
            (positionX === 14 && positionY === 16) ||
            (positionX === 14 && positionY === 17) ||
            (positionX === 13 && positionY === 13) ||
            (positionX === 13 && positionY === 14) ||
            (positionX === 13 && positionY === 15) ||
            (positionX === 13 && positionY === 16) ||
            (positionX === 13 && positionY === 17) ||
            (positionX === 12 && positionY === 13) ||
            (positionX === 12 && positionY === 14) ||
            (positionX === 12 && positionY === 15) ||
            (positionX === 12 && positionY === 16) ||
            (positionX === 11 && positionY === 14) ||
            (positionX === 10 && positionY === 15) 
          ) {
            this.move(0, 0);
            delete this.move;
          } else {
            let heroContainer = document.getElementById("herocontainer_" + this.nom);
            let nextCell = document.getElementById(
              "case_" + this.position.y + "_" + this.position.x
            );
            nextCell.appendChild(heroContainer);
            let current_cell = document.getElementById(
              "case_" + this.position.y + "_" + this.position.x
            );
            current_cell.appendChild(heroContainer);
            // console.log('Le personnage se deplace sur la case : ' + nextCell.id)
          }
        }
      
        setMoveListener() {
          let that = this;
          that.sprite;
          that.spriteTop;
          that.spriteRight;
          that.spriteBottom;
          that.spriteLeft;
      
          let heroContainer = document.getElementById("herocontainer_" + that.nom);
          document.addEventListener("keydown", function (e) {
            let code = e.keyCode;
            if (code === 0) {
              that.move(0, 0);
              heroContainer.src = that.sprite;
            } else if (code === 39) {
              that.move(1, 0);
              heroContainer.src = that.spriteRight;
              setTimeout(function () {
                heroContainer.src = that.sprite;
              }, 1500);
            } else if (code === 37) {
              that.move(-1, 0);
              heroContainer.src = that.spriteLeft;
              setTimeout(function () {
                heroContainer.src = that.sprite;
              }, 1500);
            } else if (code === 40) {
              that.move(-0, 1);
              heroContainer.src = that.spriteBottom;
              setTimeout(function () {
                heroContainer.src = that.sprite;
              }, 1500);
            } else if (code === 38) {
              that.move(0, -1);
              heroContainer.src = that.spriteTop;
              setTimeout(function () {
                heroContainer.src = that.sprite;
              }, 1500);
            }
            // console.log(code)
          });
        }
      
        windonPopUp() {
          if (this.position.x === 9 && this.position.y === 8) {
            let NoticeCard = document.getElementById("noticeCardLeft");
            NoticeCard.innerHTML =
              "<div><h3>Titre Carte</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat justo feugiat,<br> tristique felis vitae, suscipit elit. Quisque tincidunt, nunc ac pharetra luctus, dui erat rutrum magna, at condimentum arcu nisi pharetra ante. Vivamus sodales sed. </p></div>";
            NoticeCard.setAttribute(
              "style",
              "visibility: visible; top:{this.position + 1}"
            );
            setTimeout(function () {
              NoticeCard.setAttribute("style", "visibility: hidden; bottom:250px;");
            }, 5000);
            console.log(NoticeCard.innerHTML);
          } else if (this.position.x === 6 && this.position.y === 21) {
            let NoticeCard = document.getElementById("noticeCardTop");
            NoticeCard.innerHTML =
              "<div><h3>Titre Carte</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat justo feugiat,<br> tristique felis vitae, suscipit elit. Quisque tincidunt, nunc ac pharetra luctus, dui erat rutrum magna, at condimentum arcu nisi pharetra ante. Vivamus sodales sed. </p></div>";
            NoticeCard.setAttribute(
              "style",
              "visibility: visible; top:{this.position + 1}"
            );
            setTimeout(function () {
              NoticeCard.setAttribute("style", "visibility: hidden; bottom:250px;");
            }, 5000);
          } else if (this.position.x === 12 && this.position.y === 17) {
            let NoticeCard = document.getElementById("noticeCardBottom");
            NoticeCard.innerHTML =
              "<div><h3>Titre Carte</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat justo feugiat,<br> tristique felis vitae, suscipit elit. Quisque tincidunt, nunc ac pharetra luctus, dui erat rutrum magna, at condimentum arcu nisi pharetra ante. Vivamus sodales sed. </p></div>";
            NoticeCard.setAttribute(
              "style",
              "visibility: visible; top:{this.position + 1}"
            );
            setTimeout(function () {
              NoticeCard.setAttribute("style", "visibility: hidden; bottom:250px;");
            }, 5000);
          } else if (this.position.x === 20 && this.position.y === 5) {
            let NoticeCard = document.getElementById("noticeCardRight");
            NoticeCard.innerHTML =
              "<div><h3>Titre Carte</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat justo feugiat,<br> tristique felis vitae, suscipit elit. Quisque tincidunt, nunc ac pharetra luctus, dui erat rutrum magna, at condimentum arcu nisi pharetra ante. Vivamus sodales sed. </p></div>";
            NoticeCard.setAttribute(
              "style",
              "visibility: visible; top:{this.position + 1}"
            );
            setTimeout(function () {
              NoticeCard.setAttribute("style", "visibility: hidden; bottom:250px;");
            }, 5000);
          } else {
            console.log("tout roule !");
          }
        }
      
        // Message d'erreurs quand le personnage depasser le cadre (board)
        // outOfBoard() {
        //   //Variables
        //   let moveLeft = this.position.x > this.boardSize_x
        //   let moveRight = this.position.x > this.boardSize_x
        //   let moveTop = this.position.y > this.boardSize_y
        //   let moveDown = this.position.y > this.boardSize_y
      
        //   //left
        //   if (moveLeft || this.position.x < 0) {
        //     console.log('Gros naze ! tu es sorti')
        //     document.getElementById('noticeCardLeft').innerHTML =
        //       ' Gros naze ! tu es sorti par la gauche '
        //     setTimeout(function () {
        //       document.getElementById('noticeCardLeft').innerHTML = ' '
        //     }, 1000)
      
        //     //right
        //   } else if (moveRight || this.position.x >= 24) {
        //     console.log('Gros naze ! tu es sorti')
        //     document.getElementById('noticeCardRight').innerHTML =
        //       ' Gros naze ! tu es sorti par la droite '
        //     setTimeout(function () {
        //       document.getElementById('noticeCardRight').innerHTML = ' '
        //     }, 1000)
      
        //     //top
        //   } else if (moveTop || this.position.y < 0) {
        //     console.log('Gros naze ! tu es sorti')
        //     document.getElementById('noticeCardTop').innerHTML =
        //       ' Gros naze ! tu es sorti par le haut '
        //     setTimeout(function () {
        //       document.getElementById('noticeCardTop').innerHTML = ' '
        //     }, 1000)
      
        //     //bottom
        //   } else if (moveDown || this.position.y >= 24) {
        //     console.log('Gros naze ! tu es sorti')
        //     document.getElementById('noticeCardBottom').innerHTML =
        //       ' Gros naze ! tu es sorti par le bas '
        //     setTimeout(function () {
        //       document.getElementById('noticeCardBottom').innerHTML = ' '
        //     }, 1000)
        //   }
        // }
      }
      