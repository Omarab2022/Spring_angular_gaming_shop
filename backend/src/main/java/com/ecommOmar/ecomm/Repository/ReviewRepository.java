package com.ecommOmar.ecomm.Repository;

import com.ecommOmar.ecomm.Entity.FAQ;
import com.ecommOmar.ecomm.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReviewRepository extends JpaRepository<Review , Long> {

	List<Review> findAllByProductId(Long productId);
}
