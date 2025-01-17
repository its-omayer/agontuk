export interface Post {
    id: string
    title: string
    content: string
    author: string
    date: string
    excerpt: string
    imageUrl?: string
    category: string
  }
  
  export const posts: Post[] = [
    {
      id: '1',
      title: 'রিজিক আসলে কী',
      excerpt: 'রিজিক শুধু খাবার কিংবা উচ্চ বিলাসিতা নয়। রিজিক মনের শান্তি রিজিক মানে দিনি বন্ধু রিজিক হতে পারে উত্তম জীবনসথী...',
      content: 'রিজিক শুধু খাবার কিংবা উচ্চ বিলাসিতা নয়। রিজিক মনের শান্তি রিজিক মানে দিনি বন্ধু রিজিক হতে পারে উত্তম জীবনসথী বড় রিজিক হলো মনের শান্তি আপনি নামাজ পড়লে যেটা ফিল করতে পারবেন যা আপনাকে বিরত রাখবে যি না বেবিচার সহ সকল কাজ থেকে যা আল্লাহ সুবহানাহুওয়াতাআলা আমাদের করতে নিসেদ করেছেন। আপনি কখনই নিজেকে সার্বভৌম বলতে পারবেন না সার্বভৌমত্ব শুধুই এবং শুধুমাত্র মহান আল্লাহর। আল্লাহ আমাদের হালাল রিজিক অন্নেসিদের অন্তর্ভুক্ত করুক। জাজাকুমুল্লাহ খাইরান।',
      author: 'Omayer B',
      category: 'ইতিহাস',
      date: '১০ রবিউল আউয়াল(এক) ১৪৪৬',
    },
    {
      id: '2',
      title: 'সেকুলার শিক্ষা ব্যবস্থার লক্ষ',
      excerpt: 'এই শিক্ষানীতির মাধ্যমে ভারতীয়রা(বাঙালি) হবে রক্তে মাংসে ভারতীয় আর চিন্তা চেতনায় ইংরেজ।',
      content: 'এই শিক্ষানীতির মাধ্যমে ভারতীয়রা(বাঙালি) হবে রক্তে মাংসে ভারতীয় আর চিন্তা চেতনায় ইংরেজ। এটি একটি দীর্ঘমেয়াদী পরিকল্পনা যার মাধ্যমে আমাদের শিক্ষা ব্যবস্থা পরিবর্তন করা হচ্ছে।',
      author: 'লর্ড মেক্লে',
      category: 'পাশ্চাত্য',
      date: 'ফেব্রুয়ারি ২, ১৮৩৫',
    },
    {
      id: '3',
      title: 'বাংলাদেশি নাকি হিন্দুঃ',
      excerpt: 'আমরাতো এখন আপনার হুন্দুত্তের পরিচয় নিয়ে প্রশ্ন উঠতেছে, আপনি কি আসলেই হিন্দু? আপনার নামের শেষের হিন্দুদের নাম উঠিয়ে ফেলেন.....',
      content: 'একটা পোষ্ট ভালই জনপ্রিয় হয়েছে আপনারা সবাই সেটা দেখেছেন। রিপাব্লিক বাংলাদের এক টকশো তে ‘নরেন্দ্রনাথ’ নামের একজন লোককে প্রশ্ন করা হয়েছিলোঃ কেনো বাংলাদেশ ভারতের বিএসএফ কে সিমান্তে কাটা তার এর বেড়া দেয়ায় বাধা দিয়েছে? তিনি উত্তরে প্রথমে নিজের জন্মভূমির প্রশংসা করেছেন। তিনি নিজেকে গর্ভিত ভেবেছেন এই  বাংলাদেশে তার জনম। এটা আপনারা সবাই দেখেছেন। আমার এখানে সমস্যা নেই। আমার প্রশ্ন হলো যখনি উনি ২০০১ সালের কথা বলেছেন এবং বাংলাদেশের প্রশংসা করে ভারতকে দুর্বল বলেছেন তখনি টকশোটির পরিচালুক তাকে প্রশ্ন ছুরে মারেন “আমরাতো এখন আপনার হুন্দুত্তের পরিচয় নিয়ে প্রশ্ন উঠতেছে, আপনি কি আসলেই হিন্দু? আপনার নামের শেষের হিন্দুদের নাম উঠিয়ে ফেলেন।” এর মানে কী বাংলাদেশে জন্মালে,বাংলাদেশের প্রশংসা করলে, বাংলাদেশে জন্মে নিজেকে গর্ভিত মনে করলে সে হিন্দু না? এই দাদারাই হিন্দুদের নিয়ে কথা বলে আবার এই দাদারাই বাংলাদেশের প্রসংশা করলে বাংলাদেশে জন্মেছে এজন্য গর্ভবোধ করলে তাকে হিন্দু মানতে চায় না। তার মানে কি সকল বাংলাদেশি হিন্দুরা বাংলাদেশ ভালোবাসে না? তারা ভারতে গিয়ে থাকতে চায়? বাংলাদেশে জন্মানোর কারনে তারা কলঙ্কিত?',
      author: 'Omayer B',
      category: 'সমসাময়িক',
      date: 'জানুয়ারি ১, ২০২৫',
    },
    {
      id: '4',
      title: 'শীঘ্রই',
      excerpt: '"শীঘ্রই তোমার রব তোমাকে এত দিবেন যে,....',
      content: '"শীঘ্রই তোমার রব তোমাকে এত দিবেন, যে তুমি খুশি হয়ে যাবে।"(সূরা আদ দুহা:৫)',
      author: 'Omayer B',
      category: '',
      date: 'নভেম্বর ১৮, ২০২৪',
    },
    {
      id: '5',
      title: 'বাংলাদেশের প্রথম কম্পিউটার',
      excerpt: 'বাংলাদেশে প্রথম কম্পিউটার আনা হয় ১৯৬৪ সালে। এটি ছিল একটি আইবিএম ১৬২০ মডেল।',
      content: 'বাংলাদেশে প্রথম কম্পিউটার আনা হয় ১৯৬৪ সালে। এটি ছিল একটি আইবিএম ১৬২০ মডেল। তখন বাংলাদেশ পূর্ব পাকিস্তান নামে পরিচিত ছিল। এই কম্পিউটারটি আটোমিক এনার্জি সেন্টারে স্থাপন করা হয়েছিল। এর পর থেকে বাংলাদেশে ধীরে ধীরে কম্পিউটারের ব্যবহার বৃদ্ধি পেতে থাকে।',
      author: 'প্রযুক্তিবিদ',
      category: 'বিজ্ঞান ও প্রযুক্তি',
      date: 'জানুয়ারি ১৫, ২০২৩',
    }
  ]
  