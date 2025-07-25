import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import BasicInfoForm from '../forms/BasicInfoForm';
import PathologicalForm from '../forms/PathologicalForm';
import UrinalysisForm from '../forms/UrinalysisForm';

const BasicInfoPanel = () => {
  const [activeModal, setActiveModal] = useState(null);

  const basicInfo = useSelector((state) => state.medicalInfo.basicInfo);
  const urinalysis = useSelector((state) => state.medicalInfo.urinalysis);
  const pathological = useSelector((state) => state.medicalInfo.pathologicalInvestigations);

  const sectionStyle = {
    display: 'flex',
    padding: '16px',
    alignItems: 'center',
    alignContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    borderRadius: '6px',
    border: '1px solid rgba(183, 200, 229, 0.50)',
    background: '#FFF',
    cursor: 'pointer'
  };

  const titleStyle = {
    color: '#1E1E1E',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '16px',
    marginBottom: '16px'
  };

  const labelStyle = {
    color: '#7A8699',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    marginBottom: '4px'
  };

  const valueStyle = {
    color: '#09A2E3',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '20px'
  };

  const dataItem = (label, value) => (
    <div style={{ minWidth: '120px' }}>
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{value || '--'}</div>
    </div>
  );

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div
            style={{ ...sectionStyle, flex: 1, flexDirection: 'column', alignItems: 'flex-start' }}
            onClick={() => setActiveModal('basic')}
          >
            <div style={titleStyle}>Basic Information</div>
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                  {dataItem('Weight', basicInfo.weight)}
                  {dataItem('Height', basicInfo.height)}
                  {dataItem('Glucose Level', basicInfo.glucoseLevel)}
                </div>
                <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                  {dataItem('Blood Pressure', `${basicInfo.bpSystolic}/${basicInfo.bpDiastolic}`)}
                  {dataItem('Heartbeat', basicInfo.heartbeat)}
                  {dataItem('Blood Count', `${basicInfo.bloodTo}-${basicInfo.bloodDo}`)}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ ...sectionStyle, flex: 1, flexDirection: 'column', alignItems: 'flex-start' }}
            onClick={() => setActiveModal('urinalysis')}
          >
            <div style={titleStyle}>Urinalysis</div>
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {dataItem('Albumin', urinalysis.albumin)}
                {dataItem('Sugar', urinalysis.sugar)}
                <div style={{ width: '100%' }}>
                  <div style={labelStyle}>Reaction</div>
                  <div style={{
                    ...valueStyle,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {urinalysis.reaction || '--'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={sectionStyle} onClick={() => setActiveModal('pathological')}>
          <div style={{ width: '100%' }}>
            <div style={titleStyle}>Pathological</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {dataItem('Blood (Hb)', pathological.hb)}
              {dataItem('Blood (ESR)', pathological.esr)}
              {dataItem('Blood (Platelets)', pathological.platelets)}
              {dataItem('Blood Sugar PP', pathological.sugarPP)}
              {dataItem('Blood Sugar Fasting', pathological.sugarFasting)}
              {dataItem('Lupid Profile', pathological.lupidProfile)}
              {dataItem('Blood Urea', pathological.bloodUrea)}
              {dataItem('Creatinine / LFT', pathological.creatinineLFT)}
              {dataItem('Urine Routine', pathological.urineRoutine)}
              {dataItem('Stool Routine', pathological.stoolRoutine)}
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <div style={{ width: '100%' }}>
            <div style={titleStyle}>Physical Characteristics</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                flex: 1,
                borderRadius: '6px',
                background: '#E8F4FB',
                padding: '20px'
              }}>
                <div style={{
                  color: '#1E1E1E',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Identification Mark
                </div>
                <div style={{
                  color: '#818181',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400'
                }}>
                  {basicInfo.identificationMark || '--'}
                </div>
              </div>

              <div style={{
                flex: 1,
                borderRadius: '6px',
                background: '#09A2E3',
                padding: '20px'
              }}>
                <div style={{
                  color: '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  General Development
                </div>
                <div style={{
                  color: '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400'
                }}>
                  {basicInfo.generalDevelopment || '--'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={activeModal === 'basic'} onClose={() => setActiveModal(null)}>
        <BasicInfoForm onClose={() => setActiveModal(null)} />
      </Modal>

      <Modal isOpen={activeModal === 'urinalysis'} onClose={() => setActiveModal(null)}>
        <UrinalysisForm onClose={() => setActiveModal(null)} />
      </Modal>

      <Modal isOpen={activeModal === 'pathological'} onClose={() => setActiveModal(null)}>
        <PathologicalForm onClose={() => setActiveModal(null)} />
      </Modal>
    </>
  );
};

export default BasicInfoPanel;
