interface NoteData {
  id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

export const noteData: NoteData[] = [
	{
    id: '1',
		title: 'First title',
		category: 'Wrok',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam explicabo architecto facilis nulla tenetur fugit quas voluptatibus voluptate perspiciatis laudantium. Doloribus fugit minus quaerat odio deserunt explicabo dignissimos, laborum dolorem.',
		createAt: 1651266412312,
	},
  {
    id: '2',
		title: 'Second title',
		category: 'Wrok',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam explicabo architecto facilis nulla tenetur fugit quas voluptatibus voluptate perspiciatis laudantium. Doloribus fugit minus quaerat odio deserunt explicabo dignissimos, laborum dolorem.',
		createAt: 1651266632986,
	},
];
