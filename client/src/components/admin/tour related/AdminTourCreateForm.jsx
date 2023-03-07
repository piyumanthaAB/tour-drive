import React, { useState } from 'react'
import DropDown from '../../shared/Form Elements/DropDown';
import Label from '../../shared/Form Elements/Label';
import TextArea from '../../shared/Form Elements/TextArea';
import TextField from '../../shared/Form Elements/TextField';
import * as f from './AdminTourCreateFormElements';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';

const AdminTourCreateForm = () => {

  const [guideOne, setGuideOne] = useState('Select guide one');
  const [guideTwo, setGuideTwo] = useState('Select guide two');

  const availableGuides = ['mark', 'john', 'mathew'];

  const[name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[ageLimit,setAgeLimit]=useState('')
  const[capacity,setCapacity]=useState('')
  const[guide_1,setGuide_1]=useState('')
  const[guide_2,setGuide_2]=useState('')
  const[guide_3,setGuide_3]=useState('')
  const[startDate,setStartDate]=useState('')
  const[endDate,setEndDate]=useState('')
  const[category,setCategory]=useState('')
  const[locations,setLocations]=useState('')
  const [description, setDescription] = useState('')
  const [coverImg, setCoverImg] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
  
  const onSubmit = async (e) => {
    e.preventDefault();

    const headers =  {
      'Content-Type': 'multipart/form-data'
    }
    
    const formData = new FormData();

    formData.append('tour_cover',coverImg)
    formData.append('name',name)
    formData.append('price',price)
    formData.append('ageLimit',ageLimit)
    formData.append('capacity',capacity)


    for (const file of galleryImages) {
      formData.append('tour_gallery', file);
    }
    
    console.log({formData});
    
    toast.promise(
      submitForm('/api/v1/tours',formData,'post',headers),
      {
        loading: 'Adding Tour...',
        success: (data) => {
          console.log({ data });
          return ` ${data.data.message} ` || 'success'          
        },
        error: (err) => `${err.response.data.message}`
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize:'2rem'
        },
      }
    )

  };

  const handleGalleryImages = (e) => {
    setGalleryImages(e.target.files);
    
  }

  const handleCoverImg = (e) => {
    setCoverImg(e.target.files[0])
    // let url = URL.createObjectURL(e.target.files[0]);
    //     url=url.replace('blob:', '');
    //     // setSingleImg(url);
    //     console.log({singleImg:new URL(url)});
  }

  return (
    <>
      <f.Container>
        <f.FormTitle>
          Add Tour
        </f.FormTitle>
        <f.Form onSubmit={onSubmit}>
          
          <f.FormGroup>
            <Label labelText={'Tour Name'} />
            <TextField value={name} setValue={setName}  placeholder={'Enter tour name here'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Tour Price'} />
            <TextField value={price} setValue={setPrice} placeholder={'Enter tour price here'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Tour Cover'} />
            <input name='coverImg' onChange={handleCoverImg} type='file' placeholder={'Upload tour cover image here'} />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Images'} />
            <input name='galleryImages' onChange={handleGalleryImages} multiple={true} type='file' placeholder={'Upload tour gallery images here'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Age Limit'} />
            <TextField value={ageLimit} setValue={setAgeLimit} type='text' placeholder={'Enter tour maximum age limit here'} />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Capacity'} />
            <TextField value={capacity} setValue={setCapacity} type='text' placeholder={'Enter maximum no of seats for this tour'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Select Tour Guide 1'} />
            <DropDown
              dropDownValues={availableGuides}
              currentDropdownVal={guideOne}
              setCurrentDropdownVal={setGuideOne}

            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Select Tour Guide 2'} />
            <DropDown
              dropDownValues={availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Start Date'} />
            <f.DateInput value={startDate} setValue={setStartDate} type={'date'} />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'End Date'} />
            <f.DateInput value={endDate} setValue={setEndDate} type={'date'} />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Category'} />
            <DropDown
              dropDownValues={availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            />
          </f.FormGroup>

          <f.FormGroup>
            {/* <Label labelText={'Select Tour type'} />
            <DropDown
              dropDownValues={ availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            /> */}
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Locations'} />
            <TextArea value={locations} setValue={setLocations} rows={10} placeholder='Enter coordinates of the locations here' />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Description'} />
            <TextArea value={description} setValue={setDescription} rows={10} placeholder='Enter tour description here' />
          </f.FormGroup>

          <f.FormGroup>

            <f.SubmitBtn>Add Tour</f.SubmitBtn>
            <f.SubmitBtn color='#333' type='reset' >Clear</f.SubmitBtn>

            
          </f.FormGroup>
          

        </f.Form>
      </f.Container>
    </>
  );
}

export default AdminTourCreateForm