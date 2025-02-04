let notes = [
    {
      id: 1,
      heading: "Mempelajari Javascript",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
      created_by: "John Doe",
      created_at: 1738146027613
    }
  ];
  
  const createNote = (heading, description, created_by) => {
    const newNote = {
      id: notes.length + 1,
      heading: heading,
      description: description,
      created_by: created_by,
      created_at: Date.now()
    };
    notes.push(newNote);
  }
  
  const readNote = () => {
    console.log(notes);
  }
  
  const updateNote = (id, newHeading, newDescription) => {
    const noteToUpdate = notes.find(note => note.id === id);
    if (noteToUpdate) {
      noteToUpdate.heading = newHeading;
      noteToUpdate.description = newDescription;
    } else {
      console.log("Catatan tidak ditemukan");
    }
  }
  
  const deleteNote = (id) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes.splice(index, 1);
    } else {
      console.log("Catatan tidak ditemukan");
    }
  }
  
  createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe");
  readNote();
  console.log("=================================================================================================================");
  updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
  readNote();
  console.log("=================================================================================================================");
  deleteNote(1);
  readNote();
