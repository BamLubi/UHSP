package com.njtech.uhsp.service;

import com.njtech.uhsp.dao.PrescriptionDao;
import com.njtech.uhsp.entity.Prescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrescriptionService extends BaseService<PrescriptionDao, Prescription> {
}
