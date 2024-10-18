// import { NextResponse } from 'next/server';
// import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
// import db from '../../../firebase/firestore';

// export async function GET() {
//   try {
//     // Firestore에서 total_plan 컬렉션 가져오기
//     const querySnapshot = await getDoc(doc(db, 'total_plan', 'g0vgJer9zDCnuz5ZgxuH'));
//     const plans: PlanMeta[] = [];
//     const tweetData = querySnapshot.data();

//     console.log(tweetData);
//     // JSON 형태로 응답
//     return NextResponse.json({ plans });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch plans' }, { status: 500 });
//   }
// }
