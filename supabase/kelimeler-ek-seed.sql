insert into public.kelimeler
  (kelime, anlam, ornek_cumle, kategori, slug)
values
  ('ağzı sıkı', 'Sır saklayan, konuşması gereken şeyi kolay kolay söylemeyen kişi.', 'Merak etme, o ağzı sıkıdır.', 'deyim', 'agzi-siki'),
  ('kulak vermek', 'Dikkatle dinlemek, söylenene odaklanmak.', 'Biraz da karşı tarafın söylediklerine kulak ver.', 'deyim', 'kulak-vermek'),
  ('göz atmak', 'Hızlıca bakmak, kısaca incelemek.', 'Dosyaya akşam bir göz atarım.', 'deyim', 'goz-atmak'),
  ('ipe un sermek', 'Bahane üreterek işi geciktirmek veya yapmamak.', 'Yine ipe un seriyor, işi uzatıyor.', 'deyim', 'ipe-un-sermek'),
  ('taş çatlasın', 'En fazla, bilemedin şu kadar anlamında kullanılan ifade.', 'Taş çatlasın yarım saate oradayım.', 'deyim', 'tas-catlasin'),
  ('burnundan solumak', 'Çok öfkeli olmak.', 'Toplantıdan sonra burnundan soluyordu.', 'deyim', 'burnundan-solumak'),
  ('kulak misafiri olmak', 'İstemeden ya da tesadüfen bir konuşmayı duymak.', 'İsimlerini kulak misafiri oldum.', 'deyim', 'kulak-misafiri-olmak'),
  ('eteğindeki taşları dökmek', 'İçinde tuttuğu her şeyi açıkça söylemek.', 'Bugün eteğindeki taşları döktü.', 'deyim', 'etegindeki-taslari-dokmek'),
  ('lafı dolandırmak', 'Söylenecek şeyi doğrudan söylemeyip uzatmak.', 'Lafı dolandırmadan ne istediğini söyle.', 'deyim', 'lafi-dolandirmak'),
  ('gözünden düşmek', 'Değerini, saygınlığını kaybetmek.', 'O olaydan sonra herkesin gözünden düştü.', 'deyim', 'gozunden-dusmek'),
  ('pabucu dama atılmak', 'Önemi azalmak, yerini başkası almak.', 'Yeni sistem gelince eskisinin pabucu dama atıldı.', 'deyim', 'pabucu-dama-atilmak'),
  ('suyu bulandırmak', 'Karışıklık çıkarmak, işi zorlaştırmak.', 'Tam çözülecekken suyu bulandırdı.', 'deyim', 'suyu-bulandirmak'),

  ('merak', 'Bir şeyi öğrenme veya anlama isteği.', 'Merakı onu sürekli yeni şeyler okumaya itiyor.', 'genel', 'merak'),
  ('denge', 'İki ya da daha fazla unsur arasındaki uyumlu durum.', 'İş ve özel hayat arasında denge kurmaya çalışıyor.', 'genel', 'denge'),
  ('ilham', 'Yeni fikir üretmeye veya bir şey yapmaya yönelten içsel etki.', 'Sabah yürüyüşü ona ilham verdi.', 'genel', 'ilham'),
  ('özen', 'Bir işi dikkatli ve titiz yapma hali.', 'Bu tasarımda ciddi bir özen var.', 'genel', 'ozen'),
  ('verim', 'Bir işten elde edilen yararlı sonuç düzeyi.', 'Daha kısa toplantılarla verim arttı.', 'genel', 'verim'),
  ('alışkanlık', 'Tekrarlana tekrarlana yerleşen davranış.', 'Erken kalkmak zamanla alışkanlığa dönüştü.', 'genel', 'aliskanlik'),
  ('odak', 'Dikkatin belirli bir noktada toplanması.', 'Telefonu kapatınca odak geri geldi.', 'genel', 'odak'),
  ('eşik', 'Bir durumun değişmeye başladığı sınır veya seviye.', 'Bu karar onlar için kritik bir eşikti.', 'genel', 'esik'),
  ('ihtimal', 'Bir şeyin olma olasılığı.', 'Yağmur ihtimali akşama doğru artıyor.', 'genel', 'ihtimal'),
  ('sadelik', 'Gereksiz ayrıntılardan uzak, yalın olma durumu.', 'Arayüzdeki sadelik işi kolaylaştırıyor.', 'genel', 'sadelik'),
  ('ritim', 'Bir işin veya akışın düzenli ilerleyiş biçimi.', 'İki haftada çalışma ritmini buldu.', 'genel', 'ritim'),
  ('eşlik etmek', 'Birine veya bir şeye birlikte katılmak, yanında bulunmak.', 'Sunum boyunca ona ben eşlik ettim.', 'genel', 'eslik-etmek')
on conflict (slug) do update
set
  kelime = excluded.kelime,
  anlam = excluded.anlam,
  ornek_cumle = excluded.ornek_cumle,
  kategori = excluded.kategori;
