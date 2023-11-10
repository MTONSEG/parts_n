import Contacts from '@/components/pages/Contacts/Contacts';
import { Metadata } from 'next';

export const metadata: Metadata= {
	title: 'Contacts | NOUT PARTS',
}

export default function ContactsPage() {
	return <Contacts/>
	
}
