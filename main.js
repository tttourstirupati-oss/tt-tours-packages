// 1. Smooth Scroll
document.getElementById('viewPackagesBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    // HTML-ல் id="packages" என்று இருப்பதால் அதைச் சரிசெய்துள்ளேன்
    document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
});

// 2. முழுமையான 46 பேக்கேஜ் தரவுகள்
const packagesData = [
    // மாற்றம் 1: பேக்கேஜ் 1-ல் duration: "3 Hours" சேர்த்துள்ளேன்
    { id: 1, name: "Tirumala Local Temple Tour", duration: "3 Hours", price: "1,500", mainDestination: "Tirumala", places: ["Srivari Padalu", "Sila Thoranam", "Chakra Theertham", "Venugopalaswamy Temple","Papavinasam", "Akasa Ganga"], prices: { etios: "1,500", ertiga: "1,800", tavera: "2,000", tt: "2,600" } },
    
    // மாற்றம் 2: பேக்கேஜ் 2-ன் பெயரை மாற்றியுள்ளேன்
    { id: 2, name: "Tirumala Local & Tirupati Local Temple Package", price: "3,500", mainDestination: "Padmavathi Temple", places: ["Srivari Padalu", "Sila Thoranam", "Chakra Theertham", "Venugopalaswamy", "Akasa Ganga","Papavinasam", "ISKCON Temple", "Kapila Theertham", "Padmavathi Temple", "Govindaraja Swamy"], prices: { etios: "3,500", ertiga: "4,000", tavera: "4,200", tt: "5,500" } },
    
    { id: 3, name: "Srikalahasti Package", price: "3,700", mainDestination: "Srikalahasti Temple", places: ["ISKCON Temple", "Kapila Theertham", "Padmavathi Temple", "Sri Kalahasti Temple", "Govindaraja Swamy Temple"], prices: { etios: "3,700", ertiga: "4,200", tavera: "4,500", tt: "5,500" } },
    { id: 4, name: "Tirupati Local (6 Temples)", price: "3,300", mainDestination: "Srinivasa Mangapuram", places: ["ISKCON Temple", "Kapila Theertham", "Padmavathi Temple", "Govindaraja Swamy", "Srinivasa Mangapuram", "Orukula Matha Devi"], prices: { etios: "3,300", ertiga: "3,700", tavera: "4,000", tt: "4,500" } },
    { id: 5, name: "Srikalahasti – Kanipakam Package", price: "4,900", mainDestination: "Kanipakam Temple", places: ["ISKCON Temple", "Kapila Theertham", "Padmavathi Temple", "Srinivasa Mangapuram", "Kanipakam Temple", "Srikalahasti Temple"], prices: { etios: "4,900", ertiga: "5,500", tavera: "6,200", tt: "7,950" } },
    { id: 6, name: "One Day Golden Temple Package", price: "4,950", mainDestination: "Sripuram Golden Temple", places: ["Srinivasa Mangapuram", "Kanipakam Temple", "Golden Temple", "ISKCON Temple", "Kapila Theertham"], prices: { etios: "4,950", ertiga: "5,750", tavera: "6,750", tt: "9,950" } },
    { id: 7, name: "One Day Arunachalam Special", price: "7,450", mainDestination: "Arunachalam Temple", places: ["Srinivasa Mangapuram", "Kanipakam", "Golden Temple", "Arunachalam Temple"], prices: { etios: "7,450", ertiga: "8,250", tavera: "9,250", tt: "11,950" } },
    { id: 8, name: "One Day Kanchipuram Package", price: "5,250", mainDestination: "Kanchipuram", places: ["Vishnu Kanchi (Kanchipuram)", "Siva Kanchi (Kanchipuram)", "Kamakshi Amman Temple (Kanchipuram)", "Thiruttani Subramaniyaswamy Temple"], prices: { etios: "5,250", ertiga: "5,950", tavera: "7,450", tt: "10,450" } },
    { id: 9, name: "One Day Chennai Sightseeing", price: "7,250", mainDestination: "Marina Beach Chennai", places: ["Marina Beach", "Ashtalakshmi Temple","Crocodile Bank", "Muttukadu Boating"], prices: { etios: "7,250", ertiga: "7,950", tavera: "9,250", tt: "12,950" } },
    { id: 10, name: "Two Days Golden Temple & Kanchipuram", price: "9,250", mainDestination: "Kanchipuram", places: ["Srinivasa Mangapuram", "Kanipakam Temple", "Golden Temple", "Kanchipuram Three Temples", "Thiruttani Subramaniyaswamy Temple", "Padmavathi Temple"], prices: { etios: "9,250", ertiga: "10,950", tavera: "11,750", tt: "14,950" } },
    { id: 11, name: "Two Days Golden Temple, Kanchi & Srikalahasti", price: "11,950", mainDestination: "Srikalahasti", places: ["Golden Temple", "Kanchipuram Three Temples", "Thiruttani Subramaniyaswamy Temple", "Padmavathi Temple"], prices: { etios: "11,950", ertiga: "12,650", tavera: "13,650", tt: "16,950" } },
    { id: 12, name: "Two Days Arunachalam & Kanchipuram", price: "10,950", mainDestination: "Arunachalam", places: ["Srinivasa Mangapuram","Kanipakam Temple", "Golden Temple", "Arunachalam Temple", "Kanchipuram Three Temples", "Thiruttani Subramaniyaswamy Temple","Padmavathi Temple"], prices: { etios: "10,950", ertiga: "12,250", tavera: "14,650", tt: "17,950" } },
    { id: 13, name: "Two Days Arunachalam, Kanchi & Srikalahasti", price: "12,650", mainDestination: "Srikalahasti", places: ["Srinivasa Mangapuram","Kanipakkam Temple", "Golden Temple", "Arunachalam Temple", "Kanchipuram Three Temples", "Thiruttani Subramaniyaswamy Temple", "Srikalahasti Temple", "Padmavathi Temple"], prices: { etios: "12,650", ertiga: "13,950", tavera: "15,250", tt: "18,950" } },
    { id: 14, name: "Two Days Kanchi & Mahabalipuram", price: "9,550", mainDestination: "Mahabalipuram", places: ["Padmavathi Temple", "Thiruttani Subramaniyaswamy Temple", "Kanchipuram Three Temples", "Mahabalipuram Sightseeing", "Mahabalipuram Beach"], prices: { etios: "9,550", ertiga: "10,750", tavera: "11,250", tt: "14,550" } },
    { id: 15, name: "Two Days Chennai & Mahabalipuram", price: "11,250", mainDestination: "Mahabalipuram", places: ["Marina Beach", "Ashtalakshmi Temple", "Muttukadu Boating", "Crocodile Bank", "Mahabalipuram Beach", "Mahabalipuram Sightseeing"], prices: { etios: "11,250", ertiga: "11,950", tavera: "12,350", tt: "15,500" } },
    { id: 16, name: "Two Days Pondicherry Sightseeing", price: "11,450", mainDestination: "Pondicherry", places: ["Thiruttani Subramaniyaswamy Temple", "Kanchipuram Three Temples", "Pondicherry Sightseeing"], prices: { etios: "11,450", ertiga: "12,550", tavera: "13,150", tt: "18,950" } },
    { id: 17, name: "Two Days Arunachalam & Pondicherry", price: "12,250", mainDestination: "Pondicherry", places: ["Golden Temple", "Arunachalam Temple", "Pondicherry Sightseeing"], prices: { etios: "12,250", ertiga: "12,950", tavera: "14,650", tt: "19,950" } },
    { id: 18, name: "Three Days (Tirumala - Arunachalam - Kanchi)", price: "12,950", mainDestination: "Arunachalam", places: ["Tirumala Temples", "Tirupati Local", "Kanipakam", "Golden Temple", "Arunachalam", "Kanchipuram"], prices: { etios: "12,950", ertiga: "14,350", tavera: "15,750", tt: "19,550" } },
    { id: 19, name: "Three Days Arunachalam-Kanchi-Mahabs", price: "14,250", mainDestination: "Mahabalipuram", places: ["Kanipakam Temple", "Golden Temple", "Arunachalam Temple", "Mahabalipuram Sightseeing", "Mahabalipuram Beach", "Kanchipuram Three Temples", "Thiruttani Subramaniyaswamy Temple"], prices: { etios: "14,250", ertiga: "15,650", tavera: "17,450", tt: "22,950" } },
    { id: 20, name: "Three Days Arunachalam-Pondy-Kanchi", price: "15,150", mainDestination: "Pondicherry", places: ["Srinivasa Mangapuram", "Kanipakam Temple", "Golden Temple", "Arunachalam Temple", "Pondicherry Sightseeing", "Kanchipuram Three Temples", "Thiruttani Subramaniyaswamy Temple"], prices: { etios: "15,150", ertiga: "16,950", tavera: "17,950", tt: "22,950" } },
    { id: 21, name: "Three Days (Chidambaram - Srirangam)", price: "21,650", mainDestination: "Srirangam", places: ["Kanipakkam Temple", "Golden Temple", "Arunachalam Temple", "Pichavaram Boating (Mangrove Forest)", "Chidambaram Nataraja Swamy Temple", "SwamyMalai Subramaniya Swamy Temple", "Thanjavur Brahadeeswarar Temple", "Srirangam Ranganatha Swamy Temple"], prices: { etios: "21,650", ertiga: "23,950", tavera: "29,950", tt: "34,950" } },
    { id: 22, name: "Three Days (Palani - Srirangam)", price: "25,850", mainDestination: "Palani", places: ["Srinivasa Mangapuram", "Kanipakkam Temple", "Golden Temple", "Palani Subramaniyaswamy Temple", "Pathala Sombu Murugan Temple", "Srirangam Ranganatha Swamy Temple", "Kanchipuram Three Temples", "Tirutani Subramaniyaswamy Temple"], prices: { etios: "25,850", ertiga: "27,950", tavera: "31,750", tt: "36,350" } },
    { id: 23, name: "Three Days Rameswaram-Madurai-Arunachalam", price: "27,550", mainDestination: "Rameswaram", places: ["Srinivasa Mangapuram", "Kanipakkam Temple", "Golden Temple","Rameswaram Temple","Arichal Muni", "Dhanushkodi","Ram Setu Mandir", "Madurai Meenakshi Amman Temple", "Srirangam Ranganther Swamy Temple", "Arunachalam Temple"], prices: { etios: "27,550", ertiga: "30,350", tavera: "33,650", tt: "38,550" } },
    { id: 24, name: "Three Days Navagraha Temple Package", price: "27,950", mainDestination: "Kumbakonam", places: ["Suryanar Koil (Suriyan-Sun)", "Kailasanather Temple - Thingalur (Chandran-Moon)", "Vaitheeswaran Koil (Sevvai-Mars)", "Swaminatha Swamy Temple-Thiruvenkadu(Budhan-Mercury)", "Apatsahayewarar Temple - Alangudi(Guru-Jupiter)", "Agneeswarar Temple - Kanjanur (Sukran-Venus)", "Dharbaranyeswarar Temple - Thirunallar (Sani-Saturn)", "Naganathaswamy Temple - Thirunageswaram (Rahu)", "Kethunathaswamy Temple - Keezhaperumpallam(Ketu)"], prices: { etios: "27,950", ertiga: "29,750", tavera: "31,350", tt: "38,950" } },
    { id: 25, name: "Three Days Srirangam-Madurai-Kodaikanal", price: "28,950", mainDestination: "Kodaikanal", places: ["Srinivasa Mangapuram", "Kanipakkam Temple", "Golden Temple","Kodaikanal Sightseeing", "Madurai Meenakshi Amman", "Srirangam Ranganatha Swamy Temple"], prices: { etios: "28,950", ertiga: "33,950", tavera: "36,550", tt: "39,250" } },
    { id: 26, name: "Three Days Ooty-Isha-Coimbatore", price: "29,150", mainDestination: "Ooty", places: ["Isha Yoga Center", "Adiyogi Statue","Ooty Lake","Botanical Garden", "Ooty Sightseeing", "Doddabetta Peak"], prices: { etios: "29,150", ertiga: "34,250", tavera: "36,950", tt: "39,550" } },
    { id: 27, name: "Three Days ECR-Mahabs-Pondicherry", price: "21,250", mainDestination: "Pondicherry", places: ["Marina Beach","Ashtalakshmi Temple","Crocodile Bank", "Mahabalipuram Sightseeing", "Pondicherry Sightseeing", "Kanchipuram Three Temple"], prices: { etios: "21,250", ertiga: "25,550", tavera: "26,450", tt: "28,650" } },
    { id: 28, name: "Three Days Arunachalam-Old Temples", price: "15,950", mainDestination: "Arunachalam", places: ["Srinivasa Mangapuram", "Kanipakkam Temple", "Golden Temple","Arunachalam Temple", "Kanchipuram Three Temples", "Narayanavanam Temple", "Nagalapuram Temple", "Suruttapalli Temple", "Srikalahasti Temple"], prices: { etios: "15,950", ertiga: "17,750", tavera: "19,550", tt: "24,550" } },
    { id: 29, name: "Three Days Thalakona-Old Temples", price: "14,250", mainDestination: "Talakona Waterfalls", places: ["Srinivasa Mangapuram","Thalakona Waterfalls","Tirupati Local Temples", "Narayanavanam Temple", "Nagalapuram Temple", "Suruttapalli Temple","Aplai Konda Temple", "Srikalahasti Temple"], prices: { etios: "14,250", ertiga: "15,950", tavera: "16,250", tt: "18,950" } },
    { id: 30, name: "Three Days Waterfalls-Kanipakam", price: "15,250", mainDestination: "Talakona Waterfalls", places: [ "Kanipakam Temple","Srinivasa Mangapuram","Thalakona Waterfalls","Tirupati Local Temples", "Narayanavanam Temple", "Nagalapuram Temple", "Suruttapalli Temple","Aplai Konda Temple", "Srikalahasti Temple"], prices: { etios: "15,250", ertiga: "16,250", tavera: "17,150", tt: "19,950" } },
    { id: 31, name: "Three Days (Tirumala-Srikalahasti-Kanipakam)", price: "14,850", mainDestination: "Golden Temple Vellore", places: ["Tirumala Local Temple", "Tirupati Local Temple", "Srikalahasti Temple", "Kanipakam Temple", "Golden Temple"], prices: { etios: "14,850", ertiga: "15,950", tavera: "16,750", tt: "20,950" } },
    { id: 32, name: "Four Days (Vellore-Arunachalam-Kanchi)", price: "15,950", mainDestination: "Arunachalam", places: ["Tirumala Local Temple", "Tirupati Local Temple", "Srikalahasti Temple", "Kanipakam Temple", "Golden Temple", "Arunachalam Temple", "Kanchipuram Three Temples","Thiruttani Subramaniyaswamy Temple"], prices: { etios: "15,950", ertiga: "17,550", tavera: "18,050", tt: "23,950" } },
    { id: 33, name: "Four Days Golden Temple-Arunachalam-Kanchi", price: "16,650", mainDestination: "Arunachalam", places: ["Srinivasa Mangapuram", "Kanipakkam Temple", "Golden Temple","Arunachalam Temple", "Kanchipuram Three Temples", "Narayanavanam Temple", "Nagalapuram Temple", "Suruttapalli Temple", "Srikalahasti Temple","Aplai Konda Temple","Gudimallam Temple"], prices: { etios: "16,650", ertiga: "17,950", tavera: "18,950", tt: "24,550" } },
    { id: 34, name: "Four Days Arunachalam-Pondy-Mahabs", price: "17,150", mainDestination: "Pondicherry", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Arunachalam Temple", "Pondicherry Sightseeing", "Mahabalipuram Sightseeing", "Kanchipuram Three Temples","Thiruttani Subramaniyaswamy Temple","Padmavathi Temple"], prices: { etios: "17,150", ertiga: "18,250", tavera: "19,550", tt: "25,550" } },
    { id: 35, name: "Four Days Chennai-Pondy-Arunachalam", price: "19,950", mainDestination: "Arunachalam", places: ["Marina Beach", "Ashtalakshmi Temple", "Muttukadu Boating", "Crocodile Bank", "Mahabalipuram Beach", "Mahabalipuram Sightseeing", "Pondicherry Sightseeing", "Arunachalam Temple", "Golden Temple","Kanipakam Temple"], prices: { etios: "19,950", ertiga: "23,250", tavera: "25,250", tt: "28,950" } },
    { id: 36, name: "Four Days Kanchi-Mahabs-Old Temples", price: "21,150", mainDestination: "Mahabalipuram", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Arunachalam Temple", "Mahabalipuram Beach","Mahabalipuram Sightseeing", "Kanchipuram Three Temples", "Narayanavanam Temple", "Nagalapuram Temple", "Suruttapalli Temple", "Thiruttani Subramaniyaswamy Temple","Padmavathi Temple"], prices: { etios: "21,150", ertiga: "23,950", tavera: "25,150", tt: "28,950" } },
    { id: 37, name: "Four Days (Rameswaram - Madurai)", price: "28,550", mainDestination: "Rameswaram", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Arunachalam Temple", "Chidambaram Nataraja Swamy Temple", "Thanjavur Brahadeeswarar Temple", "Rameswaram Temple","Arichal Muni", "Dhanushkodi","Ram Setu Mandir", "Madurai Meenakshi Amman Temple", "Srirangam Ranganther Swamy Temple"], prices: { etios: "28,550", ertiga: "32,650", tavera: "34,550", tt: "42,950" } },
    { id: 38, name: "Four Days (Rameswaram - Kanyakumari)", price: "38,550", mainDestination: "Kanyakumari", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Rameswaram Temple","Arichal Muni", "Dhanushkodi","Ram Setu Mandir", "Kanyakumari Sightseeing", "Madurai Meenakshi Amman Temple"], prices: { etios: "38,550", ertiga: "40,950", tavera: "45,650", tt: "53,550" } },
    { id: 39, name: "Four Days (Kodaikanal - Madurai)", price: "27,950", mainDestination: "Kodaikanal", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple","Arunachalam Temple", "Srirangam Ranganther Swamy Temple", "Madurai Meenakshi Amman", "Kodaikanal Sightseeing"], prices: { etios: "27,950", ertiga: "31,550", tavera: "33,650", tt: "39,550" } },
    { id: 40, name: "Four Days (Thanjavur - Palani - Madurai)", price: "29,550", mainDestination: "Palani", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Arunachalam Temple", "Chidambaram Nataraja Swamy Temple", "Thanjavur Brahadeeswarar Temple","SwamyMalai Subramaniya Swamy Temple", "Palani Subramaniya Swamy Temple", "Madurai  Meenakshi Amman Temple","Srirangam Ranganther Swamy Temple"], prices: { etios: "29,550", ertiga: "34,950", tavera: "36,250", tt: "42,550" } },
    { id: 41, name: "Four Days (Kanchi - Mahabs - Chidambaram)", price: "24,750", mainDestination: "Chidambaram", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Arunachalam Temple", "Chidambaram Nataraja Swamy Temple", "Picthavaram Boating", "Kanchipuram Three Temples","Thiruttani Subramaniyaswamy Temple","Aplai Konda Temple","Padmavathi Temple"], prices: { etios: "24,750", ertiga: "27,550", tavera: "29,650", tt: "33,850" } },
    { id: 42, name: "Four Days (Palani - Kodai - Srirangam)", price: "29,850", mainDestination: "Kodaikanal", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple","Arunachalam Temple", "Srirangam Ranganther Swamy Temple", "Madurai Meenakshi Amman", "Kodaikanal Sightseeing","Palani Subramaniya Swamy Temple","Kanchipuram Three Temples"], prices: { etios: "29,850", ertiga: "33,650", tavera: "35,950", tt: "42,850" } },
    { id: 43, name: "Four Days (Ooty - Isha - Kodaikanal)", price: "34,950", mainDestination: "Ooty", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Arunachalam Temple","Ooty Sightseeing", "Isha Foundation", "Kodaikanal Sightseeing", "Madurai Meenakshi Amman Temple",], prices: { etios: "34,950", ertiga: "37,250", tavera: "40,950", tt: "47,250" } },
    { id: 44, name: "Four Days (Srirangam - Mahabs - Kanchi)", price: "29,750", mainDestination: "Srirangam", places: ["Srinivasa Mangapuram", "Kanipakkam Temple","Golden Temple", "Arunachalam Temple", "Chidambaram Nataraja Swamy Temple", "Thanjavur Brahadeeswarar Temple","Swamy Malai Subramaniya Swamy Temple", "Mahabalipuram Sightseeing", "Kanchipuram Three Temples","Thiruttani Subramaniyaswamy Temple"], prices: { etios: "29,750", ertiga: "33,650", tavera: "35,750", tt: "39,250" } },
    { id: 45, name: "Four Days Chennai-Pondy-Arunachalam Special", price: "22,650", mainDestination: "Pondicherry", places: ["Marina Beach","Ashtalakshmi Temple","Crocodile Bank", "Mahabalipuram Sightseeing", "Pondicherry Sightseeing", "Arunachalam Temple", "Golden Temple","Kanipakkam Temple"], prices: { etios: "22,650", ertiga: "24,950", tavera: "28,550", tt: "34,950" } },
    { id: 46, name: "Four Days (Arunachalam & Navagraha Temples)", price: "29,550", mainDestination: "Kumbakonam", places: ["Arunachalam Temple", "Chidambaram Nataraja Swamy Temple", "Suryanar Koil (Suriyan-Sun)", "Kailasanather Temple - Thingalur (Chandran-Moon)", "Vaitheeswaran Koil (Sevvai-Mars)", "Swaminatha Swamy Temple-Thiruvenkadu(Budhan-Mercury)", "Apatsahayewarar Temple - Alangudi(Guru-Jupiter)", "Agneeswarar Temple - Kanjanur (Sukran-Venus)", "Dharbaranyeswarar Temple - Thirunallar (Sani-Saturn)", "Naganathaswamy Temple - Thirunageswaram (Rahu)", "Kethunathaswamy Temple - Keezhaperumpallam(Ketu)"], prices: { etios: "29,550", ertiga: "33,750", tavera: "35,950", tt: "39,950" } }
];

// 3. கார்டுகளை உருவாக்குதல்
const packageGrid = document.getElementById('package-grid');
const pkgSelect = document.getElementById('selectedPkg');

if (packageGrid && pkgSelect) {
    packageGrid.style.display = "flex";
    packageGrid.style.flexDirection = "column";
    packageGrid.style.gap = "15px";
    packageGrid.style.padding = "20px 5%";

    packagesData.forEach(pkg => {
        // Dropdown fill
        const option = document.createElement('option');
        option.value = `Package ${pkg.id}: ${pkg.name}`;
        option.textContent = `Package ${pkg.id}: ${pkg.name}`;
        pkgSelect.appendChild(option);

        // ரூட் மேப் லிங்க்
        const routeUrl = `https://www.google.com/maps/dir/?api=1&origin=Tirupati&destination=${encodeURIComponent(pkg.mainDestination)}`;

        const card = document.createElement('div');
        card.style.cssText = `width: 100%; background: #fff; border-radius: 10px; border: 1px solid #eee; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden;`;

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; flex-wrap: wrap; gap: 15px;">
                <div style="display: flex; align-items: center; gap: 15px; flex: 1; min-width: 250px;">
                    <span style="background: #0f172a; color: #fff; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: bold;">Pkg ${pkg.id}</span>
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                        <h3 style="font-size: 16px; margin: 0; color: #333; font-weight: 700;">${pkg.name}</h3>
                        <!-- டைம் டியூரேஷன் இங்கே காட்டும் வகையில் மாற்றம் -->
                        ${pkg.duration ? `<span style="font-size: 11px; color: #ff6600; font-weight: 700;"><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>` : ''}
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                    <div style="text-align: right;">
                        <span style="display: block; font-size: 10px; color: #888;">From</span>
                        <span style="font-size: 18px; font-weight: 800; color: #ff6600;">₹${pkg.price}</span>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button onclick="togglePackage(${pkg.id})" style="background: #f4f4f5; color: #333; border: 1px solid #ddd; padding: 10px 18px; border-radius: 6px; font-size: 13px; cursor: pointer; font-weight: 600;">More Details</button>
                        <a href="https://wa.me/918886176669?text=Enquiry for Pkg ${pkg.id}: ${pkg.name}" target="_blank" style="background: #25d366; color: white; padding: 10px 18px; border-radius: 6px; font-size: 13px; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                            <i class="fab fa-whatsapp"></i> Enquiry
                        </a>
                    </div>
                </div>
            </div>
            <div id="details-${pkg.id}" class="package-content-box" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; background: #fcfcfc;">
                <div style="padding: 20px; border-top: 1px solid #f0f0f0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                    <div>
                        <h4 style="font-size: 14px; color: #222; margin-bottom: 15px; border-bottom: 2px solid #ff6600; width: fit-content; padding-bottom: 3px;">PLACES COVERED</h4>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            ${pkg.places.map(p => `<div style="font-size: 13px; color: #555; display: flex; align-items: center; gap: 10px;"><i class="fas fa-om" style="color: #ffb88c; font-size: 10px;"></i> ${p}</div>`).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 style="font-size: 14px; color: #222; margin-bottom: 15px; border-bottom: 2px solid #ff6600; width: fit-content; padding-bottom: 3px;">VEHICLE PRICING</h4>
                        <div style="background: #fff; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
                            <div style="display: flex; justify-content: space-between; font-size: 13px; padding: 6px 0; border-bottom: 1px solid #f5f5f5;"><span>Etios / Dzire</span> <b style="color: #27ae60;">₹${pkg.prices.etios}</b></div>
                            <div style="display: flex; justify-content: space-between; font-size: 13px; padding: 6px 0; border-bottom: 1px solid #f5f5f5;"><span>Ertiga / Carens</span> <b style="color: #27ae60;">₹${pkg.prices.ertiga}</b></div>
                            <div style="display: flex; justify-content: space-between; font-size: 13px; padding: 6px 0; border-bottom: 1px solid #f5f5f5;"><span>Tavera / Sumo</span> <b style="color: #27ae60;">₹${pkg.prices.tavera}</b></div>
                            <div style="display: flex; justify-content: space-between; font-size: 13px; padding: 6px 0;"><span>Tempo Traveller</span> <b style="color: #27ae60;">₹${pkg.prices.tt}</b></div>
                        </div>
                        <div style="display: flex; gap: 12px; margin-top: 20px;">
                            <a href="${routeUrl}" target="_blank" style="flex: 1; background: #4285F4; color: white; text-align: center; padding: 12px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 600;"><i class="fas fa-route"></i> View Route Map</a>
                            <a href="https://wa.me/918886176669?text=I want to book Package ${pkg.id}: ${pkg.name}" target="_blank" style="flex: 1.2; background: #25d366; color: white; text-align: center; padding: 12px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 700; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);"><i class="fab fa-whatsapp"></i> Book via WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        packageGrid.appendChild(card);
    });
}

// 4. Accordion Logic
function togglePackage(id) {
    const allBoxes = document.getElementsByClassName('package-content-box');
    const targetBox = document.getElementById('details-' + id);
    for (let box of allBoxes) {
        if (box.id !== 'details-' + id) { box.style.maxHeight = "0px"; }
    }
    if (targetBox.style.maxHeight === "0px" || targetBox.style.maxHeight === "") {
        targetBox.style.maxHeight = targetBox.scrollHeight + "px";
        setTimeout(() => { targetBox.parentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 300);
    } else { targetBox.style.maxHeight = "0px"; }
}

// 5. WhatsApp Enquiry Form Submit
document.getElementById('whatsappForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const pkg = document.getElementById('selectedPkg').value;
    const vehicle = document.getElementById('vehicleType').value;
    const persons = document.getElementById('passengers').value;
    const msg = `*TT TOURS - BOOKING*%0AName: ${name}%0APhone: ${phone}%0APackage: ${pkg}%0AVehicle: ${vehicle}%0APersons: ${persons}`;
    window.open(`https://wa.me/918886176669?text=${msg}`, '_blank');
});