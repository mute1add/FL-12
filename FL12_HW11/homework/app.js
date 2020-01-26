const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');
//code
const treeB = (branch) => {
  let wrapp = document.createElement('div');

  for(let i = 0; i< branch.length; i++) {
    let item = document.createElement('div');
    let folderImg = document.createElement('i');
    let text = document.createElement('span');
//listes
    item.classList.add('item');
    folderImg.classList.add('material-icons');
    text.innerText = branch[i].title;
//childs
    wrapp.appendChild(item);
    item.appendChild(folderImg);
    item.appendChild(text);

    if(branch[i].folder) {
      let folderItm = document.createElement('div');
      folderItm.classList.add('folder_items', 'hide');
      wrapp.appendChild(folderItm);

      folderImg.innerText = 'folder';
      folderImg.classList.add('folder_image');
//events
      item.addEventListener('click', () => {
        if(folderImg.innerText === 'folder') {
          folderImg.innerText = 'folder_open';
          folderItm.classList.remove('hide');
        } else {
          folderImg.innerText = 'folder';
          folderItm.classList.add('hide');
        }
      });

      if(branch[i].children) {
        folderItm.appendChild(treeB(branch[i].children));
      } else {
        let span = document.createElement('span');
        span.innerText = 'Folder is empty';
        span.classList.add('italic');
        folderItm.appendChild(span);
      }
    } else {
      folderImg.innerText = 'insert_drive_file';
      folderImg.classList.add('file_image');
    }
  }

  return wrapp;
}

rootNode.appendChild(treeB(structure));
