import Fashion from '../models/category';
import Meal from '../models/meal';

export const FASHION = [
  new Fashion('c1', 'Áo Thun', 'black','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZF7kIdjHLrGl_UpONa6ew_PNM2VTuRVZ-ig&usqp=CAU'),
  new Fashion('c2', 'Quần', '#f54242'),
  new Fashion('c3', 'Áo Sơ Mi', '#f5a442'),
  new Fashion('c4', 'Áo Khoác', '#f5d142'),
  new Fashion('c5', 'Đồng Hồ', '#368dff'),
  new Fashion('c6', 'Giày ', '#41d95d'),
  
 
];

export const PRODUCT = [
  new Meal(
    'm1',
    ['c1'],
    'Áo Thun Cổ Tròn Đơn Giản',
    'X-M-L',
    '75.000đ',
    
    'https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-co-tru-j01-0019826/0c3cbb8f-c002-1f00-f060-001758509981.jpg?w=540&h=756',
    20,
    [
      'Chất Liệu: Cotton 4 Chiều ',
      'Thành Phần: 95% Cotton 5% Spandex',
      'Co Giãn Tốt',
      'Độ Bền Cao',
      
    ],
    
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c1'],
    'Áo Thun Cổ Tròn Đơn Giản M2',
    'X-M-L',
    '70.000đ',
    'https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-bf01-0019691/c6d11cd8-0e59-1b00-92b6-001742e86c07.jpg?w=540&h=756',
    10,
    [
      'Chất Liệu: Cotton 2 Chiều',
      'Thành Phần: 100% Cotton',
      'Co Dãn 2 Chiều',
      'Thấm Hút Mồ Hôi Tốt Mang Lại Cảm Giác Thoáng Mát',
     
    ],
    
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c1'],
    'Áo Thun Cổ Tròn Thiên Nhiên Kì Vĩ Cyberpunk M3 ',
    'X-M-L',
    '80.000đ',
    'https://cdn3.yame.vn/pimg/ao-thun-tn-tc-cyberpunk-m3-0019938/b5bc2efb-653d-0700-25e2-00177959d579.jpg?w=540&h=756',
    45,
    [
      'Chất Liệu: Cotton 2 Chiều',
      'Thành Phần: 100% Cotton',
      'Co Dãn 2 Chiều',
      'Thấm Hút Mồ Hôi Tốt Mang Lại cảm giác thoáng mát',
      'Họa tiết in dẻo + in nhũ',
    
    ],
    
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c2'],
    'Quần Dài Jogger Đơn Giản M6  ',
    'X-M-L',
    '80.000đ',
    'https://cdn3.yame.vn/pimg/quan-dai-jogger-on-gian-m6-0020243/1ff3fecb-ad2f-0600-16e1-0017f70498c4.jpg?w=540&h=756',
    60,
    [
      'Chất liệu: Vải Kaki Thun',
      'Thành phần: 96% cotton 4% spandex',
      'Mềm- Mịn-Mát',
      'Giữ Phom dáng',
      'Co giãn tối ưu',
      'Thấm hút thoát ẩm',
      
    ],
    
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2'],
    'Quần Dài Vải Đơn Giản M1',
    'X-M-L',
    '80.000đ',
    'https://cdn3.yame.vn/pimg/quan-vai-on-gian-minimal-m1-0020132/d97646f6-fb91-1900-756e-00179ee6808e.jpg?w=540&h=756',
    15,
    [
      'Ultra Stretch - SIÊU CO GIÃN',
      'Chất liệu: Vải Kaki Thun',
      'Thành phần: 96% cotton 4% spandex',
      'Mềm - Mịn - Mát',
      'Co giãn tối ưu',
      'Giữ Phom dáng',
      'Nguồn gốc tự nhiên',
      'Thấm hút thoát ẩm',
    
    ],
    
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c2'],
    'Quần Short Đơn Giản M2',
    'X-M-L',
    '50.000đ',
    'https://cdn3.yame.vn/pimg/quan-short-jean-on-gian-solid-m2-0020077/3759c825-7b80-1100-f36d-001794040e18.jpg?w=540&h=756',
    240,
    [
      'Chất liệu: Jean Cotton',
      'Thành phần: 99% cotton 1% spandex',
      
    ],
    
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c3'],
    'Sơ Mi Cổ Lãnh Tụ Đơn Giản M25',
    'X-M-L',
    '100.000đ',
    'https://cdn3.yame.vn/pimg/so-mi-co-lanh-tu-rong-cotton-on-gian-solid-m25-0020231/deadda90-2ca0-6b00-0639-0017f7d9fd93.jpg?w=540&h=756',
    20,
    [
      'Chất liệu: Vải Sơ Mi Cotton',
      'Thành phần: 100% Cotton',
     
    ],
    
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c3'],
    'Sơ Mi Tay Dài Đơn Giản M24 ',
    'X-M-L',
    '100.000đ',
    'https://cdn2.yame.vn/pimg/so-mi-td-r-on-gian-solid-m24-0020220/c4b3c5b4-33ba-6a00-c74a-0017f7d9dfcb.jpg?w=540&h=756',
    35,
    [
      'Chất liệu: Vải Sơ Mi',
      'Thành phần: 63% poly 33% rayon 4% spandex',
      'Mềm mại, bề mặt vải trơn mịn, cảm giác mát nhẹ khi mặc.',
    
    ],
    
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c4'],
    'Áo Khoác Classic',
    'X-M-L',
    '150.000đ',
    'https://cdn3.yame.vn/pimg/ao-khoac-kaki-khong-non-y2010-e09-0019558/3d716acb-451e-0f00-1d4c-001747aaaeb8.jpg?w=540&h=756',
    45,
    [
      'Chất liệu: Vải Dù',
      'Thành phần: 100% poly',
      'Vải dù bền, dai và nhẹ',
      'Ưu điểm vượt trội là thoáng khí',
      
    ],
    
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c4'],
    'Áo Khoác Hoodie',
    'X-M-L',
    '200.000đ',
    'https://cdn3.yame.vn/pimg/ao-khoac-hoodie-y2010-a04-0019610/e8792711-7e1d-0300-2f9e-0017161a0919.jpg?w=540&h=756',
    30,
    [
      'Chất liệu: Cotton poly',
      'Thành phần: 80% cotton 20% poly',
      'Độ bền cao',
      'Co dãn tốt',
    
    ],
    
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm11',
    ['c5'],
    'Đồng hồ Nam Casio EQS-920PB-1AVUDF',
    '',
    '3.000.000đ',
    'https://cdn.tgdd.vn/Products/Images/7264/237479/casio-eqs-920pb-1avudf-nam-1-org.jpg',
    30,
    [
      'Đối tượng sử dụng: Nam',
      'Đường kính mặt: 47.6 mm',
      'Chất liệu mặt kính: Kính khoáng Mineral',
      'Chất liệu dây: Nhựa',
      'Bộ máy: Tough Solar',
    
    ],
    
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm12',
    ['c5'],
    'Đồng hồ Nam Casio MTP-E321B-1AVDF',
    '',
    '2.500.000đ',
    'https://cdn.tgdd.vn/Products/Images/7264/237480/casio-mtp-e321b-1avdf-nam-1-org.jpg',
    30,
    [
      'Đối tượng sử dụng: Nam',
      'Đường kính mặt: 44.6 mm',
      'Chất liệu mặt kính: Kính khoáng Mineral',
      'Chất liệu dây: Thép không gỉ',
      'Bộ máy: Pin (Quartz)',
    
    ],
    
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm13',
    ['c6'],
    'GIÀY NMD_R1',
    '38-39-40-41',
    '2.000.000đ',
    'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2f58407095c2412a9edcad1e010f727c_9366/Giay_NMD_R1_DJen_GZ7920_01_standard.jpg',
    30,
    [
      'Đế ngoài bằng cao su',
      'Thân giày bằng vải dệt kim co giãn',
      'Màu sản phẩm: Core Black / Cloud White / Cloud White',
      'Nâng đỡ, vừa vặn như đi tất',
      'Đế giữa Boost',
    
    ],
    
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm13',
    ['c6'],
    'GIÀY ULTRABOOST 5.0 DNA',
    '38-39-40-41',
    '4.000.000đ',
    'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/fd7424d087c64c038704ac84012e06a5_9366/Giay_Ultraboost_5.0_DNA_trang_GW5125_01_standard.jpg',
    30,
    [
      'Lớp lót bằng vải dệt',
      'Thân giày adidas Primeknit',
      'Màu sản phẩm: Off White / Off White / Light Purple',
      'Nâng đỡ, vừa vặn như đi tất',
      'Đế giữa Boost',
    
    ],
    
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm13',
    ['c6'],
    'Giày Sandal Vento SD-NB106 Màu Nâu Đỏ',
    '38-39-40-41',
    '300.000',
    'https://product.hstatic.net/1000274937/product/sd-nb106_brown__4__50ab16711d78446aab4b4f6517820500_small.jpg',
    30,
    [
      'Đế IP nguyên chất 100% chống trơn trợt, mang êm chân.',
      'Quai được thiết kế bằng da PU với đường may tinh tế chắc chắn.',
      'Sử dụng tốt trong điều kiện mưa, ẩm ướt',
      'Thích hợp để đi biển, đi học, dã ngoại, đi chơi và các hoạt động khác. ',
    
    
    ],
    
    true,
    true,
    true,
    true
  )
];
