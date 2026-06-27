// 扫雷游戏
class Minesweeper {
  constructor() {
    this.difficulties = {
      easy: { rows: 9, cols: 9, mines: 10 },
      medium: { rows: 16, cols: 16, mines: 40 },
      hard: { rows: 16, cols: 30, mines: 99 }
    };
    
    this.currentDifficulty = 'easy';
    this.board = [];
    this.revealed = [];
    this.flagged = [];
    this.gameOver = false;
    this.gameWon = false;
    this.firstClick = true;
    this.timer = 0;
    this.timerInterval = null;
    this.flagCount = 0;
    
    this.init();
    this.bindEvents();
  }
  
  init() {
    const { rows, cols, mines } = this.difficulties[this.currentDifficulty];
    this.rows = rows;
    this.cols = cols;
    this.mines = mines;
    
    this.board = [];
    this.revealed = [];
    this.flagged = [];
    this.gameOver = false;
    this.gameWon = false;
    this.firstClick = true;
    this.flagCount = 0;
    
    this.stopTimer();
    this.timer = 0;
    
    // 初始化空棋盘
    for (let i = 0; i < rows; i++) {
      this.board[i] = [];
      this.revealed[i] = [];
      this.flagged[i] = [];
      for (let j = 0; j < cols; j++) {
        this.board[i][j] = 0;
        this.revealed[i][j] = false;
        this.flagged[i][j] = false;
      }
    }
    
    this.renderBoard();
    this.updateMineCount();
    this.updateTimer();
    this.updateResetBtn('😊');
    this.hideModal();
  }
  
  // 放置地雷（第一次点击后才放，保证第一次点到的不是雷）
  placeMines(firstRow, firstCol) {
    let placed = 0;
    while (placed < this.mines) {
      const row = Math.floor(Math.random() * this.rows);
      const col = Math.floor(Math.random() * this.cols);
      
      // 跳过第一次点击的位置及其周围
      if (Math.abs(row - firstRow) <= 1 && Math.abs(col - firstCol) <= 1) continue;
      
      if (this.board[row][col] !== -1) {
        this.board[row][col] = -1; // -1 表示地雷
        placed++;
      }
    }
    
    // 计算每个格子周围的地雷数
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j] === -1) continue;
        this.board[i][j] = this.countAdjacentMines(i, j);
      }
    }
  }
  
  countAdjacentMines(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newRow = row + i;
        const newCol = col + j;
        if (this.isValidCell(newRow, newCol) && this.board[newRow][newCol] === -1) {
          count++;
        }
      }
    }
    return count;
  }
  
  isValidCell(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }
  
  renderBoard() {
    const boardEl = document.getElementById('game-board');
    boardEl.innerHTML = '';
    boardEl.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
    
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = i;
        cell.dataset.col = j;
        
        if (this.revealed[i][j]) {
          cell.classList.add('revealed');
          if (this.board[i][j] === -1) {
            cell.classList.add('mine');
            cell.textContent = '💣';
          } else if (this.board[i][j] > 0) {
            cell.textContent = this.board[i][j];
            cell.dataset.num = this.board[i][j];
          }
        } else if (this.flagged[i][j]) {
          cell.classList.add('flagged');
          cell.textContent = '🚩';
        }
        
        boardEl.appendChild(cell);
      }
    }
  }
  
  revealCell(row, col) {
    if (!this.isValidCell(row, col)) return;
    if (this.revealed[row][col] || this.flagged[row][col]) return;
    if (this.gameOver) return;
    
    // 第一次点击
    if (this.firstClick) {
      this.placeMines(row, col);
      this.firstClick = false;
      this.startTimer();
    }
    
    this.revealed[row][col] = true;
    
    // 踩到地雷
    if (this.board[row][col] === -1) {
      this.gameOver = true;
      this.stopTimer();
      this.revealAllMines();
      this.updateResetBtn('😵');
      this.showModal(false);
      
      // 标记爆炸的格子
      const cells = document.querySelectorAll('.cell');
      const index = row * this.cols + col;
      cells[index].classList.add('exploded');
      return;
    }
    
    // 如果周围没有地雷，自动翻开周围的格子
    if (this.board[row][col] === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          this.revealCell(row + i, col + j);
        }
      }
    }
    
    this.renderBoard();
    this.checkWin();
  }
  
  toggleFlag(row, col) {
    if (!this.isValidCell(row, col)) return;
    if (this.revealed[row][col]) return;
    if (this.gameOver) return;
    
    if (this.flagged[row][col]) {
      this.flagged[row][col] = false;
      this.flagCount--;
    } else {
      this.flagged[row][col] = true;
      this.flagCount++;
    }
    
    this.renderBoard();
    this.updateMineCount();
  }
  
  revealAllMines() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j] === -1) {
          this.revealed[i][j] = true;
        }
      }
    }
    this.renderBoard();
  }
  
  checkWin() {
    let unrevealedSafe = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (!this.revealed[i][j] && this.board[i][j] !== -1) {
          unrevealedSafe++;
        }
      }
    }
    
    if (unrevealedSafe === 0) {
      this.gameOver = true;
      this.gameWon = true;
      this.stopTimer();
      this.updateResetBtn('😎');
      this.showModal(true);
      
      // 自动标记所有地雷
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          if (this.board[i][j] === -1) {
            this.flagged[i][j] = true;
          }
        }
      }
      this.flagCount = this.mines;
      this.renderBoard();
      this.updateMineCount();
    }
  }
  
  updateMineCount() {
    const remaining = this.mines - this.flagCount;
    const display = String(Math.max(0, remaining)).padStart(3, '0');
    document.getElementById('mine-count').textContent = display;
  }
  
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer++;
      if (this.timer > 999) this.timer = 999;
      this.updateTimer();
    }, 1000);
  }
  
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  
  updateTimer() {
    document.getElementById('timer').textContent = String(this.timer).padStart(3, '0');
  }
  
  updateResetBtn(emoji) {
    document.getElementById('reset-btn').textContent = emoji;
  }
  
  showModal(won) {
    const modal = document.getElementById('game-over-modal');
    const title = document.getElementById('modal-title');
    const message = document.getElementById('modal-message');
    
    if (won) {
      title.textContent = '🎉 恭喜你赢了！';
      message.textContent = `用时 ${this.timer} 秒完成挑战！`;
    } else {
      title.textContent = '💥 游戏结束';
      message.textContent = '踩到地雷了，再试一次吧！';
    }
    
    modal.classList.remove('hidden');
  }
  
  hideModal() {
    document.getElementById('game-over-modal').classList.add('hidden');
  }
  
  setDifficulty(diff) {
    this.currentDifficulty = diff;
    
    // 更新按钮状态
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.diff === diff);
    });
    
    this.init();
  }
  
  bindEvents() {
    const boardEl = document.getElementById('game-board');
    
    // 左键点击
    boardEl.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      if (!cell) return;
      
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      this.revealCell(row, col);
    });
    
    // 右键点击
    boardEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const cell = e.target.closest('.cell');
      if (!cell) return;
      
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      this.toggleFlag(row, col);
    });
    
    // 重置按钮
    document.getElementById('reset-btn').addEventListener('click', () => {
      this.init();
    });
    
    // 难度选择
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setDifficulty(btn.dataset.diff);
      });
    });
    
    // 再来一局按钮
    document.getElementById('play-again-btn').addEventListener('click', () => {
      this.init();
    });
    
    // 禁止右键菜单
    boardEl.addEventListener('contextmenu', (e) => e.preventDefault());
  }
}

// 启动游戏
document.addEventListener('DOMContentLoaded', () => {
  new Minesweeper();
});
